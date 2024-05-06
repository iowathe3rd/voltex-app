import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold">{user?.firstName}</h1>
        <p className="text-14 truncate font-normal text-muted-foreground">
          {user?.email}
        </p>
      </div>

      <Button
        className="w-fit p-2 rounded-full aspect-square"
        variant={"outline"}
      >
        <Image src="icons/logout.svg" width={40} height={40} alt="logout" />
      </Button>
    </footer>
  );
};

export default Footer;
