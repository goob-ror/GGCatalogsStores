"use client";

import Image from "next/image";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { LuMapPin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-black text-[#444] border-t border-[#323232] pt-10 hidden lg:flex flex-col">
      <div className="sm:max-w-[700px] xl:max-w-[1140px] w-full mx-auto grid md:grid-cols-3 gap-10 pb-10">
        {/* Info */}
        <div>
          <Link href="/">
            <Image src="/assets/logoCatalog.png" alt="Logo Catalog" width={40} height={40} className="mb-4" />
          </Link>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita aliquid, quod dolore libero sint assumenda
            fugiat qui eligendi quam vel vitae.
          </p>
        </div>

        {/* Quick Links & Kategori */}
        <div className="flex gap-10">
          <div>
            <h2 className="text-base font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/katalog">Katalog</Link>
              </li>
              <li>
                <Link href="/brands">Brands</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold mb-4">Kategori</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Kategori 1</Link>
              </li>
              <li>
                <Link href="#">Kategori 2</Link>
              </li>
              <li>
                <Link href="#">Kategori 3</Link>
              </li>
              <li>
                <Link href="#">Kategori 4</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Address */}
        <div>
          <h2 className="text-base font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <LuPhone className="text-[#EDA412]" size={16} />
              <span>+62 812 3456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <CgMail className="text-[#EDA412]" size={16} />
              <span>ggcatalogstore@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
              <span>Instagram</span>
            </li>
          </ul>

          <div className="mt-6">
            <h2 className="text-base font-semibold mb-2">Company Address</h2>
            <div className="flex gap-3">
              <Link href="#">
                <Image src="/assets/gmaps.png" alt="Map" width={50} height={50} />
              </Link>
              <p className="text-sm">Jl. Raya Cibadak No.123, Cibadak, Cimahi, Jawa Barat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#323232] text-center py-6 text-sm text-gray-500">
        © 2025 GG Store Catalogs. All rights reserved.
      </div>
    </footer>
  );
}
