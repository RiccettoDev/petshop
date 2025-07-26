import { Metadata } from "next";
import "./globals.css";

// posso passar o metadata para o layout.tsx de forma globla aqui ou para cada pagina individualmente
// se eu passar para o layout.tsx, ele vai ser aplicado a todas as paginas
// se eu passar para a pagina individualmente, ele vai ser aplicado apenas a essa pagina

// posso usar um metadata especifico para cada pagina ou utilizar um unico  generico para todas colocando no layout.tsx
export const metadata: Metadata = {
  title: "Home - Next.js template", // title é o titulo da pagina
  description: "Este é o template do Next.js", // description é a descrição da pagina
  openGraph: {
    // open graph é uma especie de meta tag para o facebook e outros sites de redes sociais
    // é aquela icone com imagem e informações da pagina que aparece quando vc passa o mouse em cima do link
    title: "Home - Next.js template",
    description: "Este é o template do Next.js",
    url: "https://www.google.com",
    siteName: "Next.js template",
    images: ["/logo.png"],
  },
  robots: {
    // robots é uma especie de meta tag para o google e outros sites de busca
    index: true, // index: true é para o google indexar a pagina
    follow: true, // follow: true é para o google seguir os links da pagina
    nocache: true, // nocache: true é para o google não cachear a pagina
    googleBot: {
      // googleBot é uma especie de meta tag para o google
      index: true, // index: true é para o google indexar a pagina
      follow: true, // follow: true é para o google seguir os links da pagina
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
