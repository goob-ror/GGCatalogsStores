"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { VscFlame } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 right-0 left-0 flex lg:hidden justify-center border-t-[#E5E5E5] border-t bg-white ">
      <div className="flex gap-12 sm:gap-17 py-3">
        <Link href={"/"} className={`flex flex-col items-center gap-1 ${pathname === "/" ? "text-[#F8BE00]" : "text-[#838383]"}`}>
          <GoHome size={28} />
          <span>Home</span>
        </Link>
        <Link
          href={"/katalog"}
          className={`flex flex-col items-center gap-1 ${pathname === "/katalog" ? "text-[#F8BE00]" : "text-[#838383]"}`}
        >
          <AiOutlineProduct size={28} />
          <span>Katalog</span>
        </Link>
        <Link
          href={"/Brands"}
          className={`flex flex-col items-center gap-1 ${pathname === "/Brands" ? "text-[#F8BE00]" : "text-[#838383]"}`}
        >
          <VscFlame size={28} />
          <span>Brands</span>
        </Link>
        <Link
          href={"/Wishlist"}
          className={`flex flex-col items-center gap-1 ${pathname === "/Wishlist" ? "text-[#F8BE00]" : "text-[#838383]"}`}
        >
          <IoMdHeartEmpty size={28} />
          <span>Wishlist</span>
        </Link>
      </div>
    </footer>
  );
}
