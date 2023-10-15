import { db } from "@/db"
import { carts } from "./schema"
import { cookies } from "next/dist/client/components/headers"

export async function getCart() {
  const localCartId = cookies().get("localCartId")?.value

  const cart = localCartId
    ? await db.query.carts.findFirst({
        where: (carts, { eq }) => eq(carts.id, Number(localCartId)),
        with: { items: { with: { product: true } } },
      })
    : null

  return cart
    ? {
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
        subTotal: cart.items.reduce(
          (acc, item) => acc + item.quantity * parseFloat(item.product.price),
          0
        ),
      }
    : cart
}

export type ShoppingCart = Awaited<ReturnType<typeof getCart>>

export async function createCart() {
  const cart = await db.insert(carts).values({}).returning()

  if (!cart[0]) throw new Error("Failed to create cart")

  // Note: needs encryption + secure settings in real production app
  cookies().set("localCartId", String(cart[0].id))

  return {
    ...cart[0],
    items: [],
    size: 0,
    subTotal: 0,
  }
}
