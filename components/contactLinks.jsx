import InstagramIcon from "../components/icons/instagram";
import FacebookIcon from "../components/icons/facebook";
import WhatsAppIcon from "../components/icons/whatsapp";

export default function ContactLinks() {
  return (
    <section style={{backgroundColor: "#00ff00"}} className="flex flex-col items-center">
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
