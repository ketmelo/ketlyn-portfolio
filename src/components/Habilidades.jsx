
function Habilidades() {
  const web = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ];

  const ferramentas = [
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Node.js",
    "MariaDB",
  ];

  const estudando = ["Python", "C"];

  return (
    <section
      id="habilidades"
      className="bg-white px-6 py-24 text-gray-900 dark:bg-[#090811] dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-violet-600 dark:text-violet-400">
          04 / Tecnologias
        </p>

        <h2 className="mb-4 text-4xl font-bold">
          Tecnologias e ferramentas
        </h2>

        <p className="mb-12 text-gray-600 dark:text-gray-300">
          Ferramentas que utilizo nos meus projetos e
          tecnologias que estou aprendendo.
        </p>

        {/* Desenvolvimento Web */}
        <h3 className="mb-5 text-xl font-semibold">
          Desenvolvimento Web
        </h3>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {web.map((nome) => (
            <div
              key={nome}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center font-medium transition hover:border-violet-500 dark:border-gray-800 dark:bg-[#141222]"
            >
              {nome}
            </div>
          ))}
        </div>

        {/* Ferramentas */}
        <h3 className="mb-5 text-xl font-semibold">
          Ferramentas e outras tecnologias
        </h3>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {ferramentas.map((nome) => (
            <div
              key={nome}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center font-medium transition hover:border-violet-500 dark:border-gray-800 dark:bg-[#141222]"
            >
              {nome}
            </div>
          ))}
        </div>

        {/* Linguagens em aprendizado */}
        <h3 className="mb-5 text-xl font-semibold">
          Atualmente estudando
        </h3>

        <div className="flex flex-wrap gap-4">
          {estudando.map((nome) => (
            <span
              key={nome}
              className="rounded-xl bg-violet-100 px-6 py-3 font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300"
            >
              {nome}

              
            </span>
          ))}
        </div>
        
<div className="mt-12">
  <h3 className="mb-5 text-xl font-semibold">
    Inteligência Artificial e Automação
  </h3>

  <p className="max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
    Tenho interesse em Inteligência Artificial Generativa,
    automação de processos e integração de APIs.
    Estou estudando como aplicar essas tecnologias no
    desenvolvimento de soluções práticas.
  </p>
</div>
            
      </div>
    </section>
  );
}

export default Habilidades;
