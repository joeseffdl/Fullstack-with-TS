import { PostProps } from "@/utils/types"
import FormPost from "./Form"

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  const posts = await res.json()
  return posts
}

export default async function Home() {
  const posts: PostProps = await getPosts()
  return (
    <div className="min-h-screen bg-yellow-300 py-8 px-48">
      <div className="shadow-lg rounded-lg bg-yellow-100 p-10 border-2 border-lime-400">
        <FormPost />
        {posts.map((post) => (
          <div key={post.id} className="py-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
