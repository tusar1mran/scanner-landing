import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  eager?: boolean;
  onDark?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

/** Device frame for real app screenshots (captured at 1080 x 2400). */
export default function PhoneFrame({
  src,
  alt,
  className = "",
  preload = false,
  eager = false,
  onDark = false,
  sizes = "(min-width: 1024px) 300px, 70vw",
  children,
}: Props) {
  return (
    <div
      className={`relative aspect-[1080/2400] rounded-[2.6rem] bg-[#0B1220] p-[0.55rem] shadow-phone ring-1 ${onDark ? "ring-white/25" : "ring-black/5"} ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-[#F3F4F6]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          loading={eager && !preload ? "eager" : undefined}
          className="object-cover object-top"
        />
        {/* camera punch-hole */}
        <div className="absolute left-1/2 top-[1.1%] h-[2.2%] aspect-square -translate-x-1/2 rounded-full bg-[#0B1220]" />
        {children}
      </div>
      {/* side buttons */}
      <div className="absolute -right-[3px] top-[18%] h-[9%] w-[3px] rounded-r bg-[#0B1220]" />
      <div className="absolute -right-[3px] top-[30%] h-[5%] w-[3px] rounded-r bg-[#0B1220]" />
    </div>
  );
}
