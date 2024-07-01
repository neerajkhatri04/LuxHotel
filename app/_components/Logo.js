import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 z-10 px-5 py-3 rounded-full"
    >
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl px-7 py-1 rounded-full font-semibold text-zinc-50 bg-zinc-900 flex justify-center items-center">
        Lux Hotel
      </span>
    </Link>
  );
}

export default Logo;
