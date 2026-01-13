import InstagramIcon from "./icons/instagram";
import WhatsAppIcon from "./icons/whatsapp";
import MailIcon from "./icons/mail";

export default function ContactLinks() {
  return (
    <section className="flex flex-row items-center">
      <a
        href="mailto:talkers.cl@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded-full p-1 bg-blue-600 hover:bg-blue-700 transition"
      >
        <MailIcon className="icon w-12 h-12" />
      </a>

      <a
        href="https://instagram.com/talkers.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded-full p-1 bg-pink-600 hover:bg-pink-700 transition"
      >
        <InstagramIcon className="icon w-12 h-12" />
      </a>

      <a
        href="https://wa.me/56979331633"
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded-full p-1 bg-green-600 hover:bg-green-700 transition"
      >
        <WhatsAppIcon className="icon w-12 h-12" />
      </a>
    </section>
  );
}
