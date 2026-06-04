import { sectionHeadingStyles } from "@/lib/component-styles";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className={sectionHeadingStyles.wrapper}>
      <h2 id={`${id}-heading`} className={sectionHeadingStyles.title}>
        {title}
      </h2>
      {subtitle ? (
        <p className={sectionHeadingStyles.subtitle}>{subtitle}</p>
      ) : null}
    </div>
  );
}
