export default function ContactLinks() {
  return (
    <section className="flex-1 flex-col items-center justify-evenly">
      <a
        href="mailto:talkers.cl@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center"
      >
        <img
          className="h-15 w-15"
          src="images/gmail.svg"
          alt="Gmail"
          width={200}
          height={200}
        />
        <span className="text-4xl font-semibold">talkers.cl@gmail.com</span>
      </a>
      <a
        href="https://instagram.com/talkers.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center"
      >
        <img
          className="h-15 w-15"
          src="images/instagram.svg"
          alt="Instagram"
          width={200}
          height={200}
        />
        <span className="text-4xl font-semibold">@talkers.cl</span>
      </a>
      <a
        href="https://wa.me/56979331633"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center"
      >
        <img
          className="h-15 w-15"
          src="images/whatsapp.svg"
          alt="WhatsApp"
          width={200}
          height={200}
        />
        <span className="text-4xl font-semibold">9 7933 1633</span>
      </a>
    </section>
  );
}
