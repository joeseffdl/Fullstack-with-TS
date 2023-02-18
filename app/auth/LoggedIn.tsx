"use client"

import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function LoggedIn({image}: {image: string}) {
  return (
    <li className="flex gap-8 items-center ">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        onClick={() => signOut()}
      >
        Sign Out
          </button>
          <Link href="/profile">
            <Image className="w-14 rounded-full" width={64} height={64} src={image} alt="Profile Image" priority />
        </Link>
    </li>
  )
}