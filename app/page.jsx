import ContactLinks from "@/components/contactLinks";

export default function Home() {
  return (
    <>
      <main className="flex-1" style={{ backgroundColor: "#ff0000" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vulputate eu sapien sit amet porttitor. In eget eleifend risus, et
          rhoncus nibh. Ut quis ullamcorper nisl. Quisque at risus nisl. Fusce
          viverra nulla in lorem consectetur, eu scelerisque dui vulputate.
          Suspendisse in turpis orci. Curabitur mattis augue eget purus varius,
          non auctor elit consequat. Curabitur sagittis euismod ornare.
          Suspendisse pretium mauris mi, in aliquet nunc placerat lacinia.
          Mauris quis bibendum sapien. Vivamus vulputate viverra ex ac tempus.
          Suspendisse venenatis convallis elementum. Integer blandit sodales
          condimentum. Curabitur laoreet egestas erat eu convallis.
        </p>
        <ContactLinks />
      </main>
    </>
  );
}
