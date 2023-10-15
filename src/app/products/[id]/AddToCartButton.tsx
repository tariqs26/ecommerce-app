"use client"

import { useState, useTransition } from "react"
import { Spinner } from "@/components/Spinner"
import { Button } from "@nextui-org/react"
import { ShoppingCart } from "lucide-react"

type AddButtonProps = {
  productId: number
  incrementProductQuantity: (productId: number) => Promise<void>
}

export function AddToCardButton({
  productId,
  incrementProductQuantity,
}: AddButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Button
        color="warning"
        onClick={() => {
          setSuccess(false)
          startTransition(() => {
            incrementProductQuantity(productId)
            setSuccess(true)
          })
        }}
        className="font-medium"
        isLoading={isPending}
        spinner={<Spinner />}
      >
        Add To Cart
        <ShoppingCart size={18} />
      </Button>
      {!isPending && success && (
        <span className="text-success">Added to cart!</span>
      )}
    </div>
  )
}
