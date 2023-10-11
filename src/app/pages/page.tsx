import Link from "next/link";
import { DUMMY_TEMPLATES } from "../dummyData";
import Navigation from "@/components/global/Navigation";


export default function Page() {
  return <main>
    <Navigation />
    {
      DUMMY_TEMPLATES.map(t => <div key={t.id} ><Link href={`/pages/${t.id}`} >{t.name}</Link></div>)
    }
  </main>
}
