"use client"

import { useContext } from "react"
import { FormContext } from "@/utils/DataContext"
import { useRouter, usePathname } from "next/navigation"

export default function FormPost() {
  const router = useRouter()
  const { form, setForm } = useContext(FormContext)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const post = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title: form.title, content: form.content }),
    })
    const res = await post.json()
    setForm({ id: "", title: "", content: "" })
    router.refresh()
    if (!res.ok) console.log(res.message)
  }

  return (
    <form className="flex flex-col gap-2 justify-center" onSubmit={handleSubmit}>
      <input
        className="border px-2"
        type="text"
        value={form.title}
        placeholder="Title"
        onChange={(e) => setForm({...form, title: e.target.value })}
      />
      <textarea
        className="border px-2"
        value={form.content}
        placeholder="Content"
        onChange={(e) => setForm({...form, content: e.target.value })}
      />
      <div className="flex justify-end">
        <button className="bg-black text-white px-2 py-1 w-fit " type="submit">{usePathname() != "/" ? "Update" :"Post"}</button>
      </div>
    </form>
  )
}