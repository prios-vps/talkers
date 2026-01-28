import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex grow flex-col bg-green-50">
        <div className="flex flex-col justify-center max-[440px]:mb-[4vw] min-[440px]:py-10 min-[858px]:py-0 min-[858px]:flex-row grow gap-[5vw] min-[440px]:gap-10 lg:gap-30 items-center">
          <div className="flex w-fit">
            <img
              className="h-[80vw] w-[80vw] min-[440px]:h-80 min-[440px]:w-80"
              src="images/logo/Full logo ajustado.svg"
              alt=""
              width={200}
              height={200}
              aria-hidden="true"
              focusable="false"
            />
          </div>
          <div className="flex flex-col gap-[6vw] min-[440px]:gap-11">
            <p className="flex grow-0 text-[10vw] leading-[11vw] min-[480px]:text-5xl min-[480px]:leading-(--text-5xl--line-height) font-semibold text-relleno-azul-marino text-stroke-borde-azul-marino text-stroke-1" style={{ paintOrder: 'stroke fill' }}>
              Profesora Cecilia Ríos
            </p>
            <ContactLinks />
          </div>
        </div>
        <div className="flex justify-center items-center text-center uppercase text-[11vw] leading-[12vw] sm:text-6xl sm:leading-(--text-6xl--line-height) font-semibold p-4 text-white bg-blue-400">
          para estudiantes y adultos
        </div>
      </main>
    </>
  );
}
