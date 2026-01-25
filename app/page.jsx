import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex grow-1 flex-col bg-green-50">
        <div className="flex flex-col justify-center max-[440px]:mb-[4vw] min-[440px]:py-10 md:py-0 md:flex-row grow-1 gap-[5vw] min-[440px]:gap-10 lg:gap-30 items-center">
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
          <ContactLinks />
        </div>
        <div className="flex justify-center items-center text-center uppercase text-[11vw] leading-[12vw] sm:text-6xl sm:leading-(length:--text-6xl--line-height) font-semibold p-4 text-white bg-blue-400">
          para estudiantes y adultos
        </div>
      </main>
    </>
  );
}
