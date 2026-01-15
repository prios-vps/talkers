import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex-1 bg-pink-100">
        <p className="uppercase text-7xl font-semibold p-7 text-white bg-green-400 text-center">Clases de Inglés</p>
        <p className="uppercase text-6xl font-semibold p-7 text-white bg-blue-300 text-center">personalizadas</p>
        <div className="flex-1 flex-row bg-white">
          <img
            className="flex bg-pink-500 h-80 w-80 p-10"
            src="images/logo/Full logo ajustado.svg"
            alt=""
            width={200}
            height={200}
            aria-hidden="true"
            focusable="false"
          />
          <ContactLinks />
        </div>
        <p className="uppercase text-6xl font-semibold p-7 text-white bg-blue-300 text-center">para estudiantes y adultos</p>
      </main>
    </>
  );
}
