import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-zinc-50 rounded-full bg-zinc-900 px-5 py-1 flex justify-center items-center"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-zinc-50 rounded-full bg-zinc-900 px-5 py-1 flex justify-center items-center"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors text-zinc-50 rounded-full bg-zinc-900 px-3 py-1 flex justify-center gap-3 items-center"
            >
              <img
                className="h-6 rounded-full"
                src={session.user.image}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors text-zinc-50 rounded-full bg-zinc-900 px-5 py-1 flex justify-center items-center"
            >
              <span>Guest area</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
