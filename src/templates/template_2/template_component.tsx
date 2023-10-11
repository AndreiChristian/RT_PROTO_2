import { TEMPLATE_DATA } from "@/models/templateSections";

export default function Template_Two_Component(
  { title, subtitle, paragraphOne }: TEMPLATE_DATA
) {

  return <main className="bg-red-500" >
    <h1>This is page 2</h1>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{paragraphOne}</p>
  </main>

}
