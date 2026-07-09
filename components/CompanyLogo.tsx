import Image from "next/image";

type Props = {
  company?: "microsoft" | "uoft" | "foresters";
};

const logos = {
  microsoft: {
    src: "/logos/microsoft.png",
    alt: "Microsoft",
  },
  uoft: {
    src: "/logos/uoft.png",
    alt: "University of Toronto",
  },
  foresters: {
    src: "/logos/foresters.png",
    alt: "Foresters Financial",
  },
} as const;

export default function CompanyLogo({ company }: Props) {
  if (!company) return null;

  const logo = logos[company];

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center sm:h-[3.75rem] sm:w-[3.75rem]">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={60}
        height={60}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
