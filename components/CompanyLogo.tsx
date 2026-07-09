import Image from "next/image";

type Props = {
  company?: "microsoft" | "uoft" | "foresters";
};

const logos = {
  microsoft: {
    src: "/logos/microsoft.png",
    alt: "Microsoft",
    containerClass:
      "flex h-14 w-14 shrink-0 items-center justify-center sm:h-[3.75rem] sm:w-[3.75rem]",
    imageClass: "h-full w-full object-contain",
    width: 60,
    height: 60,
  },
  uoft: {
    src: "/logos/uoft.png",
    alt: "University of Toronto",
    containerClass:
      "flex h-14 w-[7.25rem] shrink-0 items-center justify-center sm:h-16 sm:w-[8.5rem]",
    imageClass: "logo-uoft h-full w-full object-contain",
    width: 136,
    height: 56,
  },
  foresters: {
    src: "/logos/foresters.png",
    alt: "Foresters Financial",
    containerClass:
      "flex h-14 w-14 shrink-0 items-center justify-center sm:h-[3.75rem] sm:w-[3.75rem]",
    imageClass: "h-full w-full object-contain",
    width: 60,
    height: 60,
  },
} as const;

export default function CompanyLogo({ company }: Props) {
  if (!company) return null;

  const logo = logos[company];

  return (
    <div className={logo.containerClass}>
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
