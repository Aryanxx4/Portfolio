type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2
        id={`${id}-heading`}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
