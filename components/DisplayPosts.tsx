"use client"

import UpdatePost from "./UpdatePost"
import DeletePost from "./DeletePost"
import { PostProps } from "@/utils/types"

export default function DisplayPosts({ id, title, content}: PostProps) {

    return (
      <div
        key={id}
        className="flex flex-col w-60 h-60 px-5 bg-green-200 rounded-xl drop-shadow-xl gap-y-4"
      >
        <div className="relative h-full mt-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <ul className="list-disc list-inside mt-2">
            <li>{content}</li>
          </ul>
          <div className="absolute flex gap-2 bottom-0 right-1">
            <UpdatePost id={id} />
            <DeletePost id={id} />
          </div>
        </div>
        <div className="border-t-2 border-yellow-900 h-1/3 text-sm">Likes</div>
      </div>
    )
}