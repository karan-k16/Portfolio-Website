type Props = {
  company?: "microsoft" | "uoft" | "foresters";
};

export default function CompanyLogo({ company }: Props) {
  if (!company) return null;

  return (
    <span
      aria-hidden="true"
      className="card flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-2 transition-colors duration-200 group-hover:border-accent/40 group-hover:text-foreground"
    >
      {company === "microsoft" ? (
        <svg viewBox="0 0 23 23" className="h-[18px] w-[18px]" fill="currentColor">
          <rect x="0" y="0" width="10.5" height="10.5" />
          <rect x="12.5" y="0" width="10.5" height="10.5" />
          <rect x="0" y="12.5" width="10.5" height="10.5" />
          <rect x="12.5" y="12.5" width="10.5" height="10.5" />
        </svg>
      ) : (
        <span className="text-[12px] font-semibold tracking-tight">
          {company === "uoft" ? "UofT" : "FF"}
        </span>
      )}
    </span>
  );
}
