import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-12 p-24 ">
      <Link href={'/tier/male'} className="rounded-xl justify-center items-center flex flex-1 aspect-square bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors">
        <span className="text-3xl font-bold">
          남자
        </span>
      </Link>
      <Link href={'/tier/female'} className="rounded-xl justify-center items-center flex flex-1 aspect-square bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors">
        <span className="text-3xl font-bold">
          여자
        </span>
      </Link>
    </main>
  )
}
