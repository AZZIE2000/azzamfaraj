import Image from "next/image";
import CardWrapper from "./card-wrapper";

const IconCard = ({ title, link }: { title: string; link: string }) => {
  const icons = {
    Linkedin: {
      src: "/social-icons/linkedin.svg",
      classNames: "aspect-square",
    },
    Github: {
      src: "/social-icons/github.svg",
      classNames: "aspect-[49/48]",
    },
    DEV: {
      src: "/social-icons/dev.svg",
      classNames: "aspect-[25/24]",
    },
    Email: {
      src: "/social-icons/email.svg",
      classNames: "aspect-[25/24]",
    },
  };

  return (
    <CardWrapper>
      <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
        <a
          className="w-[55%] h-[55%] flex items-center justify-center rounded-3xl"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`relative h-full w-auto ${icons[title as keyof typeof icons]?.classNames}`}
          >
            <Image
              src={icons[title as keyof typeof icons]?.src}
              alt={title}
              fill
            />
          </div>
        </a>
      </div>
    </CardWrapper>
  );
};

export default IconCard;
