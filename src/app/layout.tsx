import "./globals.css";

// posso passar o metadata para o layout.tsx de forma globla aqui ou para cada pagina individualmente
// se eu passar para o layout.tsx, ele vai ser aplicado a todas as paginas
// se eu passar para a pagina individualmente, ele vai ser aplicado apenas a essa pagina

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
