import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex-col bg-pink-100">
        <p className="uppercase text-7xl font-semibold p-6 text-white bg-green-400 text-center">Clases de Inglés</p>
        <p className="uppercase text-6xl font-semibold p-6 text-white bg-blue-300 text-center">personalizadas</p>
        <div className="flex flex-row bg-green-500 justify-around align-center">
          <div className="flex w-fit bg-pink-500 p-10">
            <img
              className="h-80 w-80"
              src="images/logo/Full logo ajustado.svg"
              alt=""
              width={200}
              height={200}
              aria-hidden="true"
              focusable="false"
            />
          </div>
          <ContactLinks />
        </div>
        <p className="uppercase text-6xl font-semibold p-6 text-white bg-blue-300 text-center">para estudiantes y adultos</p>
      </main>
    </>
  );
}
