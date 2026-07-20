import Image from "next/image";
import { brandLogoSrc, brandName } from "@/lib/brand";

type BrandLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: { box: "h-8 w-8 sm:h-9 sm:w-9", img: 36 },
  md: { box: "h-9 w-9", img: 36 },
} as const;

export function BrandLogo({ size = "sm", className = "" }: BrandLogoProps) {
  const { box, img } = sizes[size];

  return (
    <span className={`relative flex shrink-0 items-center justify-center ${box} ${className}`}>
      <Image
        src={brandLogoSrc}
        alt={`${brandName} logo`}
        width={img}
        height={img}
        className="h-full w-full object-contain"
        priority
        unoptimized
      />
    </span>
  );
}
