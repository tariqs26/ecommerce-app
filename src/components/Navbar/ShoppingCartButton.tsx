"use client"

import { useRouter } from "next/navigation"
import type { ShoppingCart } from "@/db/cart"
import {
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Dropdown,
  Badge,
  Button,
} from "@nextui-org/react"
import { ShoppingCartIcon } from "lucide-react"

type ShoppingCartButtonProps = {
  cart: ShoppingCart
}

export function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  const router = useRouter()

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="flex p-2 rounded-full border-none hover:bg-default-200 items-center hover:cursor-pointer transition-colors">
          <Badge content={cart?.size} color="warning">
            <ShoppingCartIcon size={20} />
          </Badge>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Preview Cart" disabledKeys={["cart"]}>
        <DropdownItem key="cart" isReadOnly className="opacity-100">
          <h4>{cart?.size ?? 0} Items</h4>
          <p>Subtotal: {cart?.subTotal}</p>
        </DropdownItem>
        <DropdownItem
          key="view"
          onClick={() => router.push("/cart")}
          className="text-center"
        >
          View Cart
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
