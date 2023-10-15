import { db } from "@/db"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { cache } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { PriceTag } from "@/components/PriceTag"
import { AddToCardButton } from "./AddToCartButton"
import { incrementProductQuantity } from "./actions"

type PageProps = {
  params: {
    id: string
  }
}

const getProduct = cache(async (id: string) => {
  const product = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, Number(id)),
  })
  if (!product) notFound()
  return product
})

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id)

  return {
    title: `${product.name} - ${siteConfig.title}`,
    description: product.description,
    openGraph: { images: [{ url: product.image }] },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id)

  return (
    <article className="flex flex-col lg:flex-row gap-4 lg:items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <section>
        <h1>{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCardButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </section>
    </article>
  )
}
