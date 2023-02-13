import UpdatePost from "@/components/UpdatePost"
import FormProvider from "@/utils/DataContext"
import { PostProps } from "@/utils/types"
import Link from "next/link"
import DeletePost from "../components/DeletePost"
import Form from "../components/Form"

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const posts: PostProps[] = await getPosts()
  return (
    <FormProvider>
      <div className="min-h-screen bg-rose-300 py-8 px-48">
        <div className="">
          <h1 className="text-center text-lg font-bold text-gray-900 mb-3">
            Post It
          </h1>
          <Form />
          <div className="grid grid-cols-4 gap-y-8 drop-shadow-2xl justify-items-center">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col w-60 h-60 px-5 bg-green-200 rounded-xl drop-shadow-xl gap-y-4"
              >
                <div className="relative h-full mt-4">
                  <h1 className="text-2xl font-semibold">{post.title}</h1>
                  <ul className="list-disc list-inside mt-2">
                    <li>{post.content}</li>
                  </ul>
                  <div className="absolute flex gap-2 bottom-0 right-1">
                    <UpdatePost id={post.id} />
                    <DeletePost id={post.id} />
                  </div>
                </div>
                <div className="border-t-2 border-yellow-900 h-1/3 text-sm">
                  Likes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FormProvider>
  )
}
