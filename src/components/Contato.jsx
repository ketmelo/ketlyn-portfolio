
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contato() {
  const contatos = [
    {
      nome: "E-mail",
      informacao: "ketlyn.code@gmail.com",
      link: "mailto:ketlyn.code@gmail.com",
      icone: Mail,
    },
    {
      nome: "LinkedIn",
      informacao: "Meu perfil",
      link: "https://www.linkedin.com/in/ketlyn-de-melo-73a0a0221/",
      icone: FaLinkedin,
    },
    {
      nome: "GitHub",
      informacao: "@ketmelo",
      link: "https://github.com/ketmelo",
      icone: FaGithub,
    },
  ];

  return (
    <section
      id="contato"
      className="bg-white px-6 py-24 text-gray-900 dark:bg-[#12111B] dark:text-white"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Contatos
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {contatos.map((contato) => {
            const Icone = contato.icone;

            return (
              <a
                key={contato.nome}
                href={contato.link}
                target={contato.link.startsWith("http") ? "_blank" : undefined}
                rel={contato.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-violet-600 transition group-hover:scale-110 dark:bg-[#25242B] dark:text-violet-400">
                  <Icone size={28} />
                </div>

                <h3 className="text-lg font-semibold">
                  {contato.nome}
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {contato.informacao}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contato;
