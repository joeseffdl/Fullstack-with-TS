"use client"

import { PostProps } from "@/utils/types"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { FormContext } from "@/utils/DataContext"

export default function UpdatePost({ id, title, content }: PostProps) { 
    const { form, setForm } = useContext(FormContext)

    async function updatePost() {
        setForm({ id, title, content })
        // try {
        //     const res = await fetch(`http://localhost:3000/api/post/${id}`, {
        //         headers: { 'Content-Type': 'application/json' },
        //         method: "PUT",
        //         body: JSON.stringify({ title, content })
        //     })
        //     const data = res.json()
        //     console.log(data)
        //     router.refresh()
        // } catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <button className="bg-blue-500 text-white font-semibold p-2" onClick={updatePost}>Update</button>
    )
}