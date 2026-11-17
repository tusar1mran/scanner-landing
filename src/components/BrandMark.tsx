import Image from "next/image";

export default function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/icon.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-xl shadow-sm"
      />
      <span
        className={`text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        Doc Scanner
      </span>
    </span>
  );
}
