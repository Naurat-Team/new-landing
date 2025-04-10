import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Globe, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const { i18n, t } = useTranslation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { name: t("how_it_works"), href: "#how-it-works" },
    { name: t("benefits"), href: "#benefits" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-screen z-50 px-6 py-4 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="relative z-10 text-2xl font-bold tracking-tight">
          Naurat
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#312c86]/20 hover:bg-[#312c86]/5 hover:border-[#312c86]/30 flex items-center gap-1 px-3"
              >
                <Globe className="h-4 w-4 text-[#312c86]" />
                <span className="font-medium text-[#312c86]">
                  {i18n.language}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24">
              {i18n.language !== "es" && (
                <DropdownMenuItem
                  className="flex justify-center cursor-pointer hover:bg-[#312c86]/5 hover:text-[#312c86]"
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </DropdownMenuItem>
              )}
              {i18n.language !== "en" && (
                <DropdownMenuItem
                  className="flex justify-center cursor-pointer hover:bg-[#312c86]/5 hover:text-[#312c86]"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://calendly.com/team-naurat-kdlj/30min"
            target="_blank"
            className="btn-hover-effect px-5 py-2 rounded-md bg-[#312c86] text-white text-sm font-medium tracking-wide"
          >
            {t("get_started_now")}
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-[#312c86]/20 hover:bg-[#312c86]/5 hover:border-[#312c86]/30 p-2"
                  >
                    <Globe className="h-5 w-5 text-[#312c86]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-24">
                  {i18n.language !== "es" && (
                    <DropdownMenuItem
                      className="flex justify-center cursor-pointer hover:bg-[#312c86]/5 hover:text-[#312c86]"
                      onClick={() => changeLanguage("es")}
                    >
                      Español
                    </DropdownMenuItem>
                  )}
                  {i18n.language !== "en" && (
                    <DropdownMenuItem
                      className="flex justify-center cursor-pointer hover:bg-[#312c86]/5 hover:text-[#312c86]"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <SheetTrigger asChild>
                <button
                  className="relative z-10 p-2 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="p-0 border-none w-full h-full"
            >
              <div className="flex flex-col h-full bg-gradient-to-b from-[#f8f8ff] to-white">
                <div className="flex justify-between items-center p-6 border-b">
                  <p className="text-xl font-bold text-[#312c86]">Naurat</p>
                  <SheetClose className="rounded-full p-2 hover:bg-black/5 transition-colors">
                    <X className="h-5 w-5" />
                  </SheetClose>
                </div>

                <nav className="flex flex-col p-6 flex-grow">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "py-6 text-xl font-medium text-gray-800 transition-all hover:text-[#312c86]",
                        index < navLinks.length - 1 &&
                          "border-b border-gray-100",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}

                  {/* Mobile Language Switcher in Menu */}
                  <div className="mt-6 border-b border-gray-100 pb-6">
                    <p className="text-gray-500 mb-4 text-lg">
                      {t("languages")}
                    </p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => changeLanguage("es")}
                        className={cn(
                          "px-4 py-2 rounded-xl border font-medium text-lg transition-all",
                          i18n.language === "es"
                            ? "bg-[#312c86] text-white border-[#312c86]"
                            : "border-gray-200 text-gray-700 hover:border-[#312c86]/30",
                        )}
                      >
                        Español
                      </button>
                      <button
                        onClick={() => changeLanguage("en")}
                        className={cn(
                          "px-4 py-2 rounded-xl border font-medium text-lg transition-all",
                          i18n.language === "en"
                            ? "bg-[#312c86] text-white border-[#312c86]"
                            : "border-gray-200 text-gray-700 hover:border-[#312c86]/30",
                        )}
                      >
                        English
                      </button>
                    </div>
                  </div>

                  <div className="mt-auto mb-8">
                    <a
                      href="https://calendly.com/team-naurat-kdlj/30min"
                      target="_blank"
                      className="block w-full py-4 px-5 rounded-xl bg-[#312c86] text-white text-center font-medium text-lg transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      {t("get_started_now")}
                    </a>
                  </div>
                </nav>

                <div className="mt-auto p-6 text-center text-sm text-gray-500">
                  © {new Date().getFullYear().toString()} {t("naurat_rights")}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
