import { TEMPLATE_DATA } from "@/models/templateSections";

export default function Template_Two_Component(
  { title, subtitle, paragraphOne }: TEMPLATE_DATA
) {

  return <main className="min-h-screen bg-black text-zinc-50" >
    <section className="box-border p-4 h-screen flex flex-col items-start justify-evenly " >
      <h1 className="w-1/2 text-2xl" >{title}</h1>
      <h2 className="w-1/2 text-lg" >{subtitle}</h2>
    </section>
    <p>{paragraphOne}</p>
  </main>

}
