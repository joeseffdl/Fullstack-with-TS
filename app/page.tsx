import FormPost from "./Form"

async function getPosts() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  const posts = await res.json()
  return posts
}

export default async function Home() {
  const posts: { id: number; title: string }[] = await getPosts()
  return (
    <div className="py-8 px-48">
      <FormPost />
      {posts.map((post) => (
        <div key={post.id} className="py-4">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
      ))}
    </div>
  )
}
