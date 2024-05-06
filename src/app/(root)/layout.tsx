import MobileNav from "@/components/layout/MobileNav";
import Sidebar from "@/components/layout/Sidebar";
import mockUser from "@/mock/user";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={mockUser} />

      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-lg sm:p-8 md:hidden">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={mockUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
