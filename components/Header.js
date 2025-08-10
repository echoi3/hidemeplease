"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/for-customers", label: "for 고객" },
  { href: "/for-merchants", label: "for 가게" },
  { href: "/about", label: "about 1인치" },
  { href: "/blog", label: "블로그" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const headerBase = "inset-x-0 top-0 z-40 border-b";
  const headerVariant = isHome
    ? "absolute bg-transparent border-transparent text-white"
    : "sticky bg-white/80 backdrop-blur text-gray-900";
  const linkBase = isHome
    ? "text-sm text-white/90 hover:text-white"
    : "text-sm text-gray-700 hover:text-black";
  const buttonBase = isHome
    ? "border-white/40 text-white hover:bg-white/10"
    : "border text-gray-900";

  return (
    <header className={`${headerBase} ${headerVariant}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`text-base sm:text-lg font-bold${
            isHome ? " text-white" : ""
          }`}
          aria-label="홈으로 이동"
          tabIndex={0}
        >
          단골가게 클론
        </Link>
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="주요 메뉴"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkBase}
              aria-label={`${item.label}로 이동`}
              tabIndex={0}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-sm ${buttonBase}`}
          aria-label="모바일 메뉴 토글"
          aria-expanded={isOpen}
          onClick={handleToggleMenu}
        >
          메뉴
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/20">
          <nav
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col"
            aria-label="모바일 메뉴"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} py-2`}
                onClick={handleCloseMenu}
                aria-label={`${item.label}로 이동`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
