import InstagramIcon from "./icons/instagram";
import GMailIcon from "./icons/gmail";
import WhatsAppIcon from "./icons/whatsapp";

export default function ContactLinks() {
  return (
    <section className="flex flex-col gap-[5vw] min-[440px]:gap-10 justify-center">
      <a
        href="mailto:talkers.cl@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[3vw] min-[440px]:gap-3 items-center"
      >
        <GMailIcon className="h-[12vw] w-[12vw] min-[440px]:h-12 min-[440px]:w-12" />
        <span className="text-[8vw] min-[440px]:text-4xl font-semibold">talkers.cl@gmail.com</span>
      </a>
      <a
        href="https://instagram.com/talkers.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[3vw] min-[440px]:gap-3 items-center"
        aria-label="Instagram talkers.cl"
      >
        <InstagramIcon className="h-[12vw] w-[12vw] min-[440px]:h-12 min-[440px]:w-12" />
        <span className="text-[8vw] min-[440px]:text-4xl font-semibold">@talkers.cl</span>
      </a>
      <a
        href="https://wa.me/56979331633"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[3vw] min-[440px]:gap-3 items-center"
      >
        <WhatsAppIcon className="h-[12vw] w-[12vw] min-[440px]:h-12 min-[440px]:w-12" />
        <span className="text-[8vw] min-[440px]:text-4xl font-semibold">9 7933 1633</span>
      </a>
    </section>
  );
}
