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
        console.log(data)
        router.refresh()
      } catch (err) {
        console.log(err)
      }
    }

    return (
        <button className="bg-red-500 text-white font-semibold p-2" onClick={() => deletePost(id)}>X</button>
    )
}