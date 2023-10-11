"use client"

import { TEMPLATE_DATA } from "@/models/templateSections";

export default function Template_One_Component(
  { title, subtitle, paragraphOne }: TEMPLATE_DATA
) {
  return <main
    className="bg-white text-black" >
    <h1 className="text-red-500" >This is the first paragraph</h1>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{paragraphOne}</p>
  </main>

}
