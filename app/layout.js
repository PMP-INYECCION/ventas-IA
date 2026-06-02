import "./globals.css";

export const metadata = {
  title: "Mavi Digital IA | Pack Emprendedor IA",
  description:
    "Productos digitales con inteligencia artificial para emprendedores, negocios locales y vendedores online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
