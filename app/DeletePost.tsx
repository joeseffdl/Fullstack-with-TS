"use client"

import { PostProps } from "@/utils/types"

export default function DeletePost({ id }: Pick<PostProps, "id">) {
    async function deletePost(postId: number) {
      try {
        fetch(`http://localhost:3000/api/post/${postId.toString()}`, {
          method: "DELETE",
        })
      } catch (err) {
        console.log(err)
      }
    }

    return (
        <button className="bg-red-500 text-white font-semibold p-2" onClick={() => deletePost(id)}>X</button>
    )
}