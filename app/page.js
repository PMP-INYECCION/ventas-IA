export default function Home() {
  const gumroadLink = "https://maviaudi.gumroad.com/l/qpmoff";

  const includes = [
    {
      title: "Ideas de contenido",
      text: "30 ideas para publicar en Instagram y atraer nuevos clientes.",
    },
    {
      title: "Textos de venta",
      text: "Mensajes listos para usar en WhatsApp, historias y publicaciones.",
    },
    {
      title: "Guiones para reels",
      text: "Estructuras cortas para crear videos que llamen la atención.",
    },
    {
      title: "Prompts IA",
      text: "Instrucciones para pedirle a ChatGPT contenido comercial.",
    },
    {
      title: "Calendario de 30 días",
      text: "Plan simple para publicar sin perder tiempo pensando.",
    },
    {
      title: "Checklist de lanzamiento",
      text: "Pasos claros para publicar, promocionar y vender tu producto.",
    },
  ];

  const audience = [
    "Emprendedores",
    "Estéticas",
    "Negocios locales",
    "Vendedores online",
    "Creadores digitales",
    "Servicios profesionales",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-20 md:px-16 lg:px-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e5,transparent_35%),radial-gradient(circle_at_top_left,#06b6d4,transparent_30%)] opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-cyan-300">
              Producto digital con Inteligencia Artificial
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Vendé más con ayuda de la{" "}
              <span className="text-cyan-300">Inteligencia Artificial</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Descargá un pack digital listo para usar con ideas, textos,
              guiones, prompts y estrategias para vender por Instagram,
              WhatsApp y redes sociales.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={gumroadLink}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-center hover:bg-cyan-300 transition"
              >
                Comprar ahora
              </a>

              <a
                href="#incluye"
                className="px-7 py-4 rounded-2xl bg-white/10 border border-white/20 font-bold text-center hover:bg-white/20 transition"
              >
                Ver qué incluye
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Ideal para emprendedores, estéticas, negocios locales y vendedores online.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white/10 border border-white/20 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-[#0b1026] p-6 border border-cyan-400/30">
                <p className="text-cyan-300 font-bold mb-3">Pack Emprendedor IA</p>

                <h2 className="text-3xl font-black mb-4">
                  Tu sistema inicial para vender con contenido profesional
                </h2>

                <ul className="space-y-3 text-gray-300">
                  <li>✅ 30 ideas de contenido para Instagram</li>
                  <li>✅ 20 textos para vender por WhatsApp</li>
                  <li>✅ 10 guiones para reels</li>
                  <li>✅ Prompts para usar con ChatGPT</li>
                  <li>✅ Calendario de publicaciones de 30 días</li>
                  <li>✅ Checklist para lanzar tu oferta digital</li>
                </ul>

                <div className="mt-8 p-5 rounded-2xl bg-cyan-400 text-black">
                  <p className="text-sm font-bold">Precio lanzamiento</p>
                  <p className="text-4xl font-black"> USD 8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-28 bg-[#080c1f]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black">
            ¿Te cuesta saber qué publicar o qué decir para vender?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Este pack te da una base lista para empezar a promocionar tu negocio
            con contenido claro, directo y pensado para convertir seguidores en clientes.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-bold mb-3">Sin quedarte sin ideas</h3>
              <p className="text-gray-400">
                Tenés contenido para publicar durante todo un mes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-bold mb-3">Listo para usar</h3>
              <p className="text-gray-400">
                Copiás, pegás, adaptás y publicás en minutos.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-bold mb-3">Con enfoque comercial</h3>
              <p className="text-gray-400">
                Cada recurso está pensado para promocionar y vender mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="incluye" className="px-6 py-20 md:px-16 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-bold mb-3">Contenido del pack</p>

          <h2 className="text-3xl md:text-5xl font-black mb-10">
            Todo lo que necesitás para empezar a vender con IA
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-white/10 border border-white/10 hover:border-cyan-400/60 transition"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-28 bg-[#080c1f]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black">
              Ideal para emprendedores que quieren vender más rápido
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              No necesitás ser experto en marketing. El pack está pensado para
              personas que quieren avanzar, publicar mejor y empezar a generar
              movimiento en redes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-white/10 border border-white/10 font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 lg:px-28">
        <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-10 text-black">
          <h2 className="text-3xl md:text-5xl font-black">
            Empezá hoy con tu Pack Emprendedor IA
          </h2>

          <p className="mt-5 text-lg font-medium">
            Una herramienta simple para ordenar tus publicaciones, vender mejor
            por WhatsApp y crear contenido con ayuda de la inteligencia artificial.
          </p>

          <p className="mt-8 text-5xl font-black">USD 8</p>

          <a
            href={gumroadLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-10 py-4 rounded-2xl bg-black text-white font-bold hover:bg-gray-900 transition"
          >
            Comprar ahora
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-gray-500 border-t border-white/10">
        <p>Mavi Digital IA — Productos digitales para emprendedores</p>
      </footer>
    </main>
  );
}
