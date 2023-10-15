import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { getCart } from "@/db/cart"
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar"
import {
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Dropdown,
} from "@nextui-org/dropdown"
import { Input } from "@nextui-org/input"
import { Avatar } from "@nextui-org/avatar"
import { Search } from "lucide-react"
import logo from "@/assets/logo.png"
import { ShoppingCartButton } from "./ShoppingCartButton"

async function searchProducts(formData: FormData) {
  "use server"

  const query = formData.get("query")?.toString()

  if (query) redirect(`/search?q=${query}`)
}

export async function Nav() {
  const cart = await getCart()
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand className="mr-4">
            <Image src={logo} alt="Logo" width={24} />
            <p className="hidden sm:block font-bold text-inherit">
              {siteConfig.title}
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <form action={searchProducts}>
          <Input
            type="search"
            name="query"
            placeholder="Type to search..."
            className="w-full min-w-[200px]"
            size="sm"
            variant="bordered"
            startContent={<Search size={18} />}
          />
        </form>
        <ShoppingCartButton cart={cart}/>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
