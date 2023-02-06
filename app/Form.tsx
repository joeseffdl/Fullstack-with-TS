"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function FormPost() {
  const router = useRouter()
  const [title, setTitle] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const post = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    })
    const res = await post.json()
    router.refresh()
    if (!res.ok) console.log(res.message)
  }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        className="border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-black text-white px-2 py-1 w-fit" type="submit">Post</button>
    </form>
  )
}
