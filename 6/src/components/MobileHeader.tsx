// import { type RefObject } from "react";
import clsx from "clsx";
import { useEffect } from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import FooterRights from "./FooterRights";

type MobileHeaderProps = {
    isOpen: boolean;
    toggleMenu: () => void;
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
};

export default function MobileHeader({ isOpen, toggleMenu, scrollToSection }: MobileHeaderProps) {    
    return (
        <div className={`fixed top-0 left-0 z-50 h-full w-64 backdrop-blur-md text-black shadow-lg side-panel transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}>
            <div className="h-full p-6 flex flex-col gap-6 cursor-pointer side-panel-wrapper">
                <Logo
                wrapperClassName="side-panel-logo-wrapper"
                imgClassName="h-11 w-24 side-panel-logo" />

                <div className="border-b border-gray-200"></div>

                <nav className="text-base text-white font-medium uppercase tracking-[0.05rem] side-panel-nav-container">
                    <ul className="flex flex-col gap-6 side-panel-nav-container-list">
                        <li className="side-panel-nav-container-list-item">
                            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="transition side-panel-nav-container-list-item-link hash-nav-link">
                                Úvod
                            </a>
                        </li>
                        <li className="side-panel-nav-container-list-item">
                            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="transition side-panel-nav-container-list-item-link hash-nav-link">
                                Ceník
                            </a>
                        </li>
                        <li className="side-panel-nav-container-list-item">
                            <a href="#products" onClick={(e) => scrollToSection(e, "products")} className="transition side-panel-nav-container-list-item-link hash-nav-link">
                                Produkty
                            </a>
                        </li>
                        <li className="side-panel-nav-container-list-item">
                            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="transition side-panel-nav-container-list-item-link hash-nav-link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="mt-auto text-sm text-center text-gray-400 side-panel-panel-text-content-right-wrapper">
                    &copy;
                    {" "}
                    <FooterRights />
                    {" "}
                    <span className="uppercase">
                        Ulazebnika.cz
                    </span>
                    {" "}
                    - Všechna práva vyhrazena
                </div>
            </div>
        </div>
    );
};