"use client";
import {  AiFillHome, AiFillSetting } from "react-icons/ai";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { pagesPath } from "@/lib/pathpida/$path";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-between border-t-border border-t">
      <Button
        variant="ghost"
        size="icon"
        className={`${pathname == "/home" && "text-primary"}`}
        asChild
      >
        <Link href={pagesPath.home.$url()}>
          <AiFillHome className="w-8 h-8" />
        </Link>
      </Button>
      {/* <Button */}
      {/*   variant="ghost" */}
      {/*   size="icon" */}
      {/*   className={`${pathname == "/reports" && "text-primary"}`} */}
      {/* > */}
      {/*   <AiFillCalendar className="w-8 h-8" /> */}
      {/* </Button> */}
      <Button
        variant="ghost"
        size="icon"
        className={`${pathname == "/settings" && "text-primary"}`}
        asChild
      >
        <Link href={pagesPath.settings.$url()}>
          <AiFillSetting className="w-8 h-8" />
        </Link>
      </Button>
    </div>
  );
};
