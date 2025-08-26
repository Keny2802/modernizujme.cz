import { useState } from "react";
import Logo from "./Logo";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <footer className="bg-[var(--white-1)] py-24 border-t border-[var(--white-2)] footer">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 footer-wrapper">
                
                <div className="space-y-4 footer-group">
                    <Logo wrapperClassName="footer-logo-wrapper" imgClassName="h-14 w-auto footer-logo"/>
                    <p className="text-sm text-gray-400 footer-content">
                        Barbershop U Lazebníka - profesionální péče o vlasy
                        a vousy v srdci Klánovic.
                    </p>
                </div>

                <div className="text-neutral-950 footer-group footer-nav">
                    <h4 className="font-semibold text-lg mb-4 footer-nav-heading">
                        Navigace
                    </h4>
                    <ul className="space-y-2 footer-list">
                        <li className="footer-list-item">
                            <a
                            href="#hero"
                            onClick={(e) => scrollToSection(e, "hero")}
                            className="uppercase footer-list-item-link">
                                Úvod
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a
                            href="#pricing"
                            onClick={(e) => scrollToSection(e, "pricing")}
                            className="uppercase footer-list-item-link">
                                ceník
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a
                            href="#products"
                            onClick={(e) => scrollToSection(e, "products")}
                            className="uppercase footer-list-item-link">
                                produkty
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "contact")}
                            className="uppercase footer-list-item-link">
                                kontakt
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact footer-group">
                    <h4 className="font-semibold text-lg mb-4 footer-contact-heading">
                        Kontakt
                    </h4>
                    <ul className="space-y-2 text-sm footer-contact-list">
                        <li className="flex items-center gap-2 footer-contact-list-item">
                            +420 777 123 456
                        </li>
                        <li className="flex items-center gap-2 footer-contact-list-item">
                            info@ulazebnika.cz
                        </li>
                        <li className="flex items-center gap-2 footer-contact-list-item">
                            Slavětínská 1072/68, 190 14 Klánovice, Praha
                        </li>
                    </ul>
                </div>

            </div>

            <div className="mt-10 border-t border-[var(--white-2)] text-center text-sm text-gray-500 footer-bottom footer-group">
                <p className="mt-12 footer-bottom-content">
                    &copy;
                    {
                        new Date().getFullYear()
                    }
                    {" "}
                    Barbershop U Lazebníka.
                    Všechna práva vyhrazena.
                </p>
            </div>
        </footer>
    );
};

export default Footer;