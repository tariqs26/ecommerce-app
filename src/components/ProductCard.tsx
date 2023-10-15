"use client"

import type { Product } from "@/db/schema"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardBody, Chip } from "@nextui-org/react"
import { PriceTag } from "./PriceTag"

export function ProductCard(props: Product) {
  const router = useRouter()

  const isNew =
    Date.now() - new Date(props.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7
    
  return (
    <Card isPressable onPress={() => router.push(`/products/${props.id}`)}>
      <Image
        src={props.image}
        alt={props.name}
        width={800}
        height={400}
        className="object-cover h-48"
      />
      <CardBody className="space-y-2">
        <h3>{props.name}</h3>
        {isNew && (
          <Chip color="success" size="sm">
            New
          </Chip>
        )}
        <p className="flex-1">{props.description}</p>
        <PriceTag price={props.price} />
      </CardBody>
    </Card>
  )
}
