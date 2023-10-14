import { siteConfig } from "@/config/site"
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { db } from "@/db"
import { products } from "@/db/schema"
import { redirect } from "next/navigation"

export const metadata = {
  title: `Add Product - ${siteConfig.title}`,
}

async function addProduct(data: FormData) {
  "use server"
  const name = data.get("name")?.toString()
  const description = data.get("description")?.toString()
  const image = data.get("image")?.toString()
  const price = data.get("price")?.toString()

  if (!(name && description && image && price))
    throw new Error("Missing required fields")

  await db.insert(products).values({
    name,
    description,
    image,
    price,
  })
  redirect("/")
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form className="space-y-3" action={addProduct}>
        <Input
          label="Name"
          name="name"
          labelPlacement="outside"
          placeholder="Product name"
          isRequired
        />
        <Textarea
          label="Description"
          name="description"
          labelPlacement="outside"
          placeholder="Describe your product here..."
          isRequired
        />
        <Input
          type="url"
          label="Image URL"
          name="image"
          labelPlacement="outside"
          placeholder="https://unsplash.com/s/photos/products"
          isRequired
        />
        <Input
          type="number"
          label="Price"
          name="price"
          placeholder="0.00"
          labelPlacement="outside"
          isRequired
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Button type="submit" color="warning" className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  )
}
