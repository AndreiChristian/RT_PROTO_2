"use client";

import { useEditingStore } from "@/stores/editingStore";
import Template_One_Component from "@/templates/template_1/template_component";
import Template_Two_Component from "@/templates/template_2/template_component";

interface PageComponentProps {
  pageId: string
}

export default function PageComponent({ pageId }: PageComponentProps) {

  const { title, subtitle, paragraphOne } = useEditingStore((state) => state)

  switch (pageId) {
    case "1":
      return <Template_One_Component title={title} subtitle={subtitle} paragraphOne={paragraphOne} />
    case "2":
      return <Template_Two_Component
        title={title} subtitle={subtitle} paragraphOne={paragraphOne}
      />
    default:
      return <h1>404</h1>
  }

}
