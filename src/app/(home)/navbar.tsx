import Image from "next/image"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import { SearchInput } from "./search-input"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
        <Link href="/" className="flex gap-2 items-center shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={36}
            height={36}
          />
          <h3 className="text-2xl text-blue-700">Docs</h3>
        </Link>

        <SearchInput />

        <UserButton />
    </nav>
  )
}