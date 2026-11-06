
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-5 text-gray-900 dark:border-gray-800 dark:bg-[#090811] dark:text-white">
      <div className="mx-auto max-w-7xl text-center">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ketlyn Melo.
          Todos os direitos reservados.
        </p>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Desenvolvido com React e Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
