"use server"

import { db } from "@/db"
import { createCart, getCart } from "@/db/cart"
import { cartItems } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function incrementProductQuantity(productId: number) {
  const cart = (await getCart()) ?? (await createCart())

  console.log(cart.items)
  const cartItem = cart.items.find((item) => item.productId === productId)

  console.log(cartItem, cartItem?.quantity)

  if (cartItem)
    await db
      .update(cartItems)
      .set({ quantity: cartItem.quantity + 1 })
      .where(eq(cartItems.id, cartItem.id))
  else
    await db
      .insert(cartItems)
      .values({ cartId: cart.id, productId, quantity: 1 })

  revalidatePath("/products/[id]")
}
