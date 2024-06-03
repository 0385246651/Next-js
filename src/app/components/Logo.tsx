// ./frontend/src/app/[lang]/components/Logo.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src={src} alt="logo" width={200} height={68} className="h-full max-w-[70%]" />}
      <div className="ml-2">{children}</div>
    </Link>
  );
}