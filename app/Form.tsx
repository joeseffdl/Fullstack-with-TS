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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create a new post</button>
    </form>
  )
}
