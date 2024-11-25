import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="m-auto md:w-[767px] h-fit py-5 px-4 flex justify-between">
      <p>
        Developed by{" "}
        <a
          target="_blank"
          href="http://imcasero.dev"
          className="font-bold text-primary cursor-pointer"
        >
          @imcasero.dev
        </a>{" "}
        with 💜
      </p>
      <a
        href="https://github.com/imcasero/devfinder"
        target="_blank"
        className="p-1 hover:bg-primary/30 rounded-md transition"
      >
        <Github />
      </a>
    </footer>
  );
};
