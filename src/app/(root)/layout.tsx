import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div></div>
        </div>
        {children}
      </div>
    </main>
  );
}
