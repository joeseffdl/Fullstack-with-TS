"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoggedIn({ image }: { image: string }) {
  return (
    <li className="flex items-center gap-8 ">
      <button
        className="rounded-xl bg-gray-700 py-2 px-6 text-sm text-white disabled:opacity-25"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <Link href="/profile">
        <Image
          className="w-14 rounded-full"
          width={64}
          height={64}
          src={image}
          alt="Profile Image"
          priority
        />
      </Link>
    </li>
  );
}
