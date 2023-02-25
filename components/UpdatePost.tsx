import Link from "next/link";
import { PostProps } from "../utils/types";

export default function UpdatePost({ id }: Pick<PostProps, "id">) {
  return (
    <Link href={`/${id}`}>
      <div className="bg-transparent border border-blue-500 rounded-full text-blue-500 text-sm font-semibold px-2 text-center">
        Update
      </div>
    </Link>
  );
}
