import clsx from "clsx";
import { useState, useRef } from "react";
import Logo from "./Logo";
import MobileHeader from "./MobileHeader";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        const targetLink = document.getElementById(id);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };

        setIsOpen(false);
    };

    return (
        <header className="bg-white p-2 border-b border-gray-200 header" id="header">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 header-wrapper">
                <Logo wrapperClassName={clsx(
                    "header-logo-wrapper",
                    isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                imgClassName="h-20 w-52 header-logo" />

                <nav className="md:flex text-lg font-medium uppercase tracking-[0.05em] nav-container">
                    <ul className="flex gap-6 nav-container-list">
                        <li className="nav-list-item">
                            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="transition nav-list-item-link hash-nav-link">
                                Úvod
                            </a>
                        </li>
                        {/* <li className="nav-list-item">
                            <a href="#reservation" onClick={(e) => scrollToSection(e, "reservation")} className="transition nav-list-item-link hash-nav-link">
                                Rezervace
                            </a>
                        </li> */}
                        <li className="nav-list-item">
                            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="transition nav-list-item-link hash-nav-link">
                                o nás
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="transition nav-list-item-link hash-nav-link">
                                Ceník
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#products" onClick={(e) => scrollToSection(e, "products")} className="transition nav-list-item-link hash-nav-link">
                                Produkty
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="transition nav-list-item-link hash-nav-link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="md:hidden z-50 mt-4 ml-auto flex flex-col items-center gap-[5px] h-6 w-6 focus:outline-none group cursor-pointer hamburger-btn" id="hamburger-btn" onClick={toggleMenu}>
                    {/* <span className="block h-[2px] w-full bg-black rounded transition-transform duration-300 group-[.open]:rotate-45 group-[.open]:translate-y-[6px]"></span>
                    <span className="block h-[2px] w-full bg-black rounded transition-opacity duration-300 group-[.open]:opacity-0"></span>
                    <span className="block h-[2px] w-full bg-black rounded transition-transform duration-300 group-[.open]:-rotate-45 group-[.open]:-translate-y-[6px]"></span> */}

                    <span className={`block h-[2px] w-full bg-black rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
                    <span className={`block h-[2px] w-full bg-black rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-[2px] w-full bg-black rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
                </button>
            </div>

            <MobileHeader
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            scrollToSection={scrollToSection} />
        </header>
    );
};