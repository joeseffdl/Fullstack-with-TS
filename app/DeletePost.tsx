"use client"

import { PostProps } from "@/utils/types"
import { useRouter } from "next/navigation"

export default function DeletePost({ id }: Pick<PostProps, "id">) {
    const router = useRouter()
  
    async function deletePost(postId: number) {
      try {
        const res = await fetch(`http://localhost:3000/api/post/${postId}`, {
          headers: { 'Content-Type': 'application/json'},
          method: "DELETE",
        })
        const data = res.json()
        router.refresh()
      } catch (err) {
        console.log(err)
      }
    }

    return (
        <button className="bg-transparent border border-red-500 rounded-full text-red-500 text-sm font-semibold px-2 text-center" onClick={() => deletePost(id)}>X</button>
    )
}