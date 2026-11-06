
import Sobre from "./Sobre";
import Experiencia from "./Experiencia";
import Projetos from "./Projetos";
import Habilidades from "./Habilidades";
import Formacao from "./Formacao";
import Contato from "./Contato";



function Initial() {
  return (
    <main>
      {/* Apresentação inicial */}
      <section
        id="inicio"
        className="flex min-h-screen items-center bg-white px-6 py-20 text-gray-900 dark:bg-[#090811] dark:text-white"
      >
        <div className="mx-auto w-full max-w-7xl">

          <p className="mb-6 font-medium text-violet-600 dark:text-violet-400">
            Olá, seja bem-vindo ao meu portfólio!
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Eu sou a
            <span className="block text-violet-600 dark:text-violet-400">
              Ketlyn Melo.
            </span>
          </h1>

          
<p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
  Sou estudante de Ciência da Computação, com formação
  técnica em Informática e experiência prática em
  desenvolvimento de software e automação.

  Tenho interesse em Inteligência Artificial Generativa,
  integração de APIs e criação de soluções que simplifiquem
  processos e resolvam problemas reais.
</p>


          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-violet-600 px-7 py-3 font-medium text-white transition hover:bg-violet-700"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="rounded-xl border border-violet-500 px-7 py-3 font-medium text-violet-600 transition hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-950"
            >
              Entrar em contato
            </a>
          </div>

        </div>
      </section>

      {/* Seção Sobre mim */}
      <Sobre />
      <Experiencia />
      <Projetos />
      <Habilidades />
      <Formacao />
      <Contato />

    </main>
  );
}

export default Initial;
