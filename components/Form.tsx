"use client"

import { useState, useContext } from "react"
import { FormContext } from "@/utils/DataContext"
import { useRouter, usePathname } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export default function FormPost() {
  const router = useRouter()
  const { form, setForm } = useContext(FormContext)
  const [isDisabled, setIsDisabled] = useState(false)
  let toastPostID: string

  const { mutate } = useMutation(
    async (data: { title: string; content: string }) => {
      const res = await axios.post("/api/posts/createPost", data)
      return res.data
    }, {
      onSuccess: () => {
        toast.success("Post created!🚀", {id: toastPostID})
        setForm({ id: "", title: "", content: "" })
        setIsDisabled(false)
        router.refresh()
    },
      onError: (err) => {
        toast.error("Something went wrong!", {id: toastPostID})
        setIsDisabled(false)
      }
    }
  )
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.loading("Creating post...", {id: toastPostID})
    setIsDisabled(true)
    mutate({ title: form.title, content: form.content })
  }

  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault()
  //   const post = await fetch(`/api/createPost`, {
  //     method: "POST",
  //     body: JSON.stringify({ title: form.title, content: form.content }),
  //   })
  //   const res = await post.json()
  //   setForm({ id: "", title: "", content: "" })
  //   router.refresh()
  //   if (!res.ok) console.log(res.message)
  // }

  return (
    <form className="flex flex-col gap-2 justify-center" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-md"
        type="text"
        value={form.title}
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="p-2 rounded-md"
        value={form.content}
        placeholder="Content"
        onChange={(e) => setForm({...form, content: e.target.value })}
      />
      <div className="flex items-center justify-between gap-2">
        <p className={`font-bold text-sm ${form.content.length > 300 ? `text-red-600` : ``}`}>
          {`${form.content.length}/300`}
          {form.content.length > 300 && ` - Content exceeded the maximum length!`}
        </p>
        <button
          disabled={isDisabled || !form.title || form.content.length > 300}
          className="bg-teal-500 text-white rounded-md px-4 w-fit 
            disabled:cursor-not-allowed disabled:opacity-50"
          type="submit">
          {usePathname() != "/" ? "Update" : "Post"}
        </button>
      </div>
    </form>
  )
}
