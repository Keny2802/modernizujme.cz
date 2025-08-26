import { useState } from "react";
import { FlipWords } from "./FlipWords";

const words = ["Klasické střihy", "Prémiová péče", "Profesionální barbers"];

const HeroText = () => {
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
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 hero-overlay">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight hero-main-heading section-main-heading">
                Barbershop U Lazebníka
            </h1>
            <p className="text-4xl md:text-6xl font-black mt-4 hero-subheading-show-text-animation">
                <FlipWords words={words} />
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl hero-main-subheading section-main-subheading">
                Precizní střihy, elegantní úprava vousů a klasické holení v srdci Klánovic.
            </p>
            <a
            href="#team"
            className="mt-10 inline-block bg-[var(--brown-1)] text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition hero-main-cta-link section-main-cta-link"
            onClick={(e) => scrollToSection(e, "team")}>
                Podívejte se na náš tým
            </a>
        </div>
    );
};

export default HeroText;