import Link from "next/link";

export default function Navigation() {
  return <nav
    className=" box-border flex flex-row items-center justify-center w-full shadow-zinc-600 shadow-md p-2 gap-2 " >
    <Link href={"/"} >Home</Link>
    <span className="flex-1" ></span>
    <Link href={"/pages"} >Pages</Link>
    <Link href={"/about"} >About</Link>
  </nav>
}
