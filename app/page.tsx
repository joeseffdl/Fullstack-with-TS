import FormProvider from "@/utils/DataContext"
import { PostProps } from "@/utils/types"
import Link from "next/link"
import DeletePost from "./DeletePost"
import Form from "./Form"

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
      <div className="min-h-screen bg-yellow-300 py-8 px-48">
        <div className="">
          <h1 className="text-center text-2xl font-bold mb-3">Post It</h1>
          <Form />
          {posts.map((post) => (
            <div key={post.id} className="py-4">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="font-semibold">{post.content}</p>
              <div className="flex">
                <Link href={`/${post.id}`}>
                  <div className="bg-blue-500 text-white font-semibold p-2">
                    Update
                  </div>
                </Link>
                <DeletePost id={post.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FormProvider>
  )
}
