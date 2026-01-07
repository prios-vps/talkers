import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-3 min-h-screen items-center justify-center font-sans">
      <h1 className="max-w-xs text-3xl font-semibold tracking-tight">
        TALKERS.CL
      </h1>
      <main>
        <p>El sitio está en construcción.</p>
        <p>
          Visita nuestro{" "}
          <a
            href="https://www.instagram.com/talkers.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <Image src="/talkers.cl.jpg" alt="Logo" width={200} height={200} />
      </main>
      <footer>Sitio creado con NextJS</footer>
    </div>
  );
}
