import { Chip } from "@nextui-org/chip"
import { formatPrice } from "@/lib/utils"

type PriceTagProps = {
  price: string
  className?: string
}

export function PriceTag({ price, className }: PriceTagProps) {
  return (
    <Chip
      size="sm"
      variant="light"
      className={`border rounded-md ${className}`}
    >
      {formatPrice(price)}
    </Chip>
  )
}
