export default function Header() {
  return (
    <header>
      <h1>
        <div className="flex justify-center items-center text-center uppercase text-[14vw] leading-[16vw] min-[530px]:text-7xl min-[530px]:leading-(length:--text-7xl--line-height) font-semibold px-4 py-4 text-white bg-green-400">
          Clases de inglés
        </div>{" "}
        <div className="flex justify-center items-center text-center uppercase text-[11vw] leading-[12vw] min-[530px]:text-6xl min-[530px]:leading-(length:--text-6xl--line-height) font-semibold px-4 py-2 text-white bg-blue-400">
          personalizadas
        </div>
      </h1>
    </header>
  );
}
