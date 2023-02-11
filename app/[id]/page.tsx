// "use client"

import { ParamsProps, PostProps } from "@/utils/types"
import Form from "../Form"

async function getPostbyId(id: string) {
    const res = await fetch(`http:localhost:3000/api/post/${id}`, {
        method: "GET",
    })
    if (!res.ok) {
        console.log(res)
    }
    return res.json()
}

export default async function Page({ params }: ParamsProps) {
  const post: PostProps[] = await getPostbyId(params.id)
  return (
    <div>
          {/* {post.map((details) => (
              <div key={details.id} className="py-4">
                  <h1 className="text-2xl font-bold">{details.title}</h1>
                    <p className="font-semibold">{details.content}</p>
                </div>
          ))} */}
          <Form />
    </div>
  )
}
