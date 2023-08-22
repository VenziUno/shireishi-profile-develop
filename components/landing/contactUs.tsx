import Link from "next/link";
import InboxIcon from "@/images/inbox.png";
import Image from "next/image";

interface Props {
  email: string;
}

const ContactUs: React.FC<Props> = ({ email }) => {
  return (
    <section
      id="ContactUs"
      className="mb-[-10px] relative py-2 contact__background"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 w-full py-6">
          <p className="text-center text-lg sm:text-2xl md:text-3xl candarab text-[#292929]">
            For Any Inquiry, Please Contact Us On
          </p>

          <Link href={`mailto:${email}`}
            target="_blank"
            className="flex gap-2 items-center justify-center">
            <div className="max-w-[16px]">
              <Image src={InboxIcon} alt='inbox' />
            </div>
            <p className="text-center text-base sm:text-lg md:text-xl candara text-[#292929] underline">
              {email}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
