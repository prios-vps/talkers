import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex-1 bg-pink-100">
        <p>Clases de Inglés</p>
        <p>personalizadas</p>
        <div className="">
          <img
            className="bg-white h-80 w-80 p-10"
            src="images/logo/Full logo ajustado.svg"
            alt=""
            width={200}
            height={200}
          />
          <ContactLinks />
        </div>
        <p>para estudiantes y adultos</p>
      </main>
    </>
  );
}
