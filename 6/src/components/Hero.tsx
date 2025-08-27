import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroText from "./HeroText";
import { FlipWords } from "./FlipWords";

type FooterProps = {
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

gsap.registerPlugin(ScrollTrigger);

export default function Hero({scrollToSection}: FooterProps) {
    // const heroHeadingRef = useRef<HTMLHeadingElement>(null);

    // useEffect(
    //     if (!heroHeadingRef.current) return;

    //     gsap.from(heroHeadingRef.current, {
    //         y: -50,
    //         opacity: 0,
    //         duration: 1,
    //         ease: "power3.out"
    //     });

    //     gsap.from(heroHeadingRef.current, {
    //         scrollTrigger: {
    //             trigger: heroHeadingRef.current,
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: true,
    //         },

    //         y: -100,
    //         opacity: 0,
    //         ease: "none"
    //     });
    // }, []);

    return (
        <section className="relative h-screen w-full hero" id="hero">
            <div className="relative h-full hero-wrapper">
                <div className="absolute inset-0 hero-image-wrapper">
                    <img
                    src="images/Hero.jpg"
                    alt="Barbershop U Lazebníka Interiér"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover hero-image" />
                    <div className="absolute inset-0 bg-black/60  hero-image-dark-theme"></div>
                </div>

                <HeroText />
            </div>
        </section>
    );
};