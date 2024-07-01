import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg6.jpg";
export default function Home() {
  return (
    <main className="mt-24">
      <Image
        className="object-cover object-top scale-x-[1]"
        quality={100}
        src={bg}
        fill
        placeholder="blur"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-white mb-10 tracking-tight font-semibold">
          Luxury in the wild
        </h1>
        <Link
          href="/cabins"
          className="bg-white px-8 py-6 text-black text-lg font-semibold hover:bg-accent-600 hover:text-white transition-all duration-500"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
