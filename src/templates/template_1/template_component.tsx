import { TEMPLATE_DATA } from "@/models/templateSections";

export default function Template_One_Component(
  { title, subtitle, paragraphOne }: TEMPLATE_DATA
) {
  return <main
    className="min-h-screen bg-zinc-200 text-black"
  >
    <section className="h-screen flex flex-col items-center justify-center" >
      <h1 className="text-4xl" >{title}</h1>
      <h2 className="w-1/2" >{subtitle}</h2>
    </section>
    <p>{paragraphOne}</p>

  </main>

}
