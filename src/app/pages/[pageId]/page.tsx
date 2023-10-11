export default function Page({ params }: { params: { pageId: string } }) {
  return <div>My Post: {params.pageId}</div>
}
