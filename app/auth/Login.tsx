"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="rounded-xl bg-gray-700 py-2 px-6 text-sm text-white disabled:opacity-25"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
