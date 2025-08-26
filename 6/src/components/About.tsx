type AboutProps = {
    scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

export default function About({ scrollToSection }: AboutProps) {
    return (
        <section className="bg-[var(--white-1)] py-24 border-t border-[var(--white-2)] about" id="about">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center about-wrapper">
                
                <div className="relative about-image-wrapper">
                    <img
                    src="images/Hero.jpg"
                    alt="Barbershop U Lazebníka Interiér"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl shadow-xl about-image" />
                    <div className="absolute bottom-6 right-6 bg-[var(--brown-1)] text-white px-6 py-4 rounded-xl shadow-md border border-white/20 about-image-text-overlay-wrapper">
                        <p className="text-xl font-bold">
                            10+ let zkušeností
                        </p>
                    </div>
                </div>
                
                <div className="about-text-content">
                    <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-gray-900 mb-6 about-main-heading section-main-heading">
                        O nás
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6 about-main-subheading section-main-subheading">
                        Jsme moderní
                        {" "}
                        <span className="font-semibold text-[var(--brown-1)]">
                            Barbershop
                        </span>
                        {" "}
                        s tradičním přístupem. Věříme, že střih není jen o vlasech,
                        ale o celém zážitku - od chvíle, kdy vstoupíte,
                        až po ten pocit jistoty, když odcházíte.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6 about-main-second-subheading section-main-second-subheading">
                        Náš tým zkušených barberů kombinuje klasické techniky s moderními trendy.
                        Ať už hledáte fresh fade, elegantní vous neboo kompletní změnu stylu - jsme tu pro vás.
                    </p>
                    <a
                    href="#team"
                    className="inline-block bg-[var(--brown-1)] text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition about-main-cta-link section-main-cta-link"
                    onClick={(e) => scrollToSection(e, "team")}>
                        Poznejte náš tým
                    </a>
                </div>
                
            </div>
        </section>
    );
};