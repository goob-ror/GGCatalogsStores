"use client";

import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { usePathname } from "next/navigation";
export default function TopNavbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/katalog", label: "Katalog" },
    { href: "/brands", label: "Brands" },
    { href: "/wishlist", label: "Wishlist" },
  ];

  return (
    <header className="flex justify-center bg-black px-5 py-4 md:px-10 sm:py-6 lg:px-0">
      <div className="flex justify-between gap-7 sm-gap-0 sm:max-w-[700px] xl:max-w-[1140px] w-full">
        <h1>
          <Link href="/">
            <Image src="/assets/logoCatalog.png" alt="Logo" width={40} height={40} />
          </Link>
        </h1>

        <nav className="hidden xl:flex items-center ">
          <div className="flex gap-12 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${pathname === item.href ? "text-[#F8BE00]" : "text-[#838383]"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex rounded-md overflow-hidden w-full  sm:max-w-[300px]">
          <input
            type="text"
            placeholder="Cari Barang...."
            className="bg-[#323232] px-5 py-2 text-[#B7B7B7] w-full focus:outline-none"
          />
          <button className="bg-[#FFCD29] py-1 px-3 cursor-pointer">
            <GoSearch size={20} className="text-black"/>
          </button>
        </div>
      </div>
    </header>
  );
}
