import Image from "next/image";

type Props = {
  company?: "microsoft" | "uoft" | "foresters";
};

const logoContainer =
  "flex h-14 w-14 shrink-0 items-center justify-center sm:h-[3.75rem] sm:w-[3.75rem]";

const logos = {
  microsoft: {
    src: "/logos/microsoft.png",
    alt: "Microsoft",
    imageClass: "h-full w-full object-contain",
    width: 60,
    height: 60,
  },
  uoft: {
    src: "/logos/uoft.png",
    alt: "University of Toronto",
    imageClass: "logo-uoft h-[82%] w-[92%] object-contain",
    width: 60,
    height: 60,
  },
  foresters: {
    src: "/logos/foresters.png",
    alt: "Foresters Financial",
    imageClass: "h-full w-full rounded-md object-cover",
    width: 60,
    height: 60,
  },
} as const;

export default function CompanyLogo({ company }: Props) {
  if (!company) return null;

  const logo = logos[company];

  return (
    <div className={logoContainer}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={logo.imageClass}
      />
    </div>
  );
}
