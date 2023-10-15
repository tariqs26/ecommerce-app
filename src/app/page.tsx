import { db } from "@/db"
import { products } from "@/db/schema"
import { desc } from "drizzle-orm"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { ProductCard } from "@/components/ProductCard"

export default async function Home() {
  const data = await db.select().from(products).orderBy(desc(products.id))
  return (
    <>
      {data[0] && (
        <div className="bg-default-100 rounded-xl flex items-center p-4 gap-4 flex-col md:flex-row">
          <Image
            src={data[0].image}
            alt={data[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-xl"
            priority
          />
          <div className="self-center space-y-4">
            <h1>{data[0].name}</h1>
            <p>{data[0].description}</p>
            <Link href={`/products/${data[0].id}`}>
              <Button color="warning">Check it out</Button>
            </Link>
          </div>
        </div>
      )}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.slice(1).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}
