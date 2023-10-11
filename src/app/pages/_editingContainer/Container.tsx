"use client";

import { useEditingStore } from "@/stores/editingStore";
import Link from "next/link";
import FormSection from "./FormSection";

export default function Container() {

  const { title, setTitle, subtitle, setSubtitle, paragraphOne, setParagraphOne } = useEditingStore((state) => state)


  return <div
    className="
    absolute right-4 top-1/4 p-4 h-1/2
    flex flex-col items-center justify-start 
    bg-zinc-200 rounded-md shadow-md shadow-zinc-950 
    "
  >
    <h1>Hello</h1>

    <FormSection label="Title" setValue={setTitle} value={title} />

    <FormSection label="Subtitle" setValue={setSubtitle} value={subtitle} />

    <FormSection label="ParagraphOne" value={paragraphOne} setValue={setParagraphOne} />

    <span className="flex-1"></span>

    <Link href={"/pages"} >Back to Pages</Link>
    <Link href={"/"} >Back Home</Link>
  </div>
}
