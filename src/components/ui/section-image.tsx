import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

export function SectionImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px",
  objectPosition = "center",
}: SectionImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
