import PageComponent from "../_page/PageComponent";

export default function Page({ params }: { params: { pageId: string } }) {
  return (
    <PageComponent pageId={params.pageId} />
  )
}
