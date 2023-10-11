import { ReactNode } from "react";
import Container from "../_editingContainer/Container";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <main>
    <Container />
    {children}
  </main>
}
