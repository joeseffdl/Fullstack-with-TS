import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LoggedIn from "./LoggedIn";
import Login from "./Login";

export default async function Navigation() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex items-center justify-between py-8">
      <Link href={`/`}>
        <h1 className="text-lg font-bold">Send It</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <LoggedIn image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
