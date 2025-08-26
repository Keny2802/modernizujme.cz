type TeamMember = {
    teamMemberName: string,
    teamMemberRole: string,
    teamMemberPhoto: string
};

const teamMembers: TeamMember[] = [
    {
        teamMemberName: "Pavel Lazebník",
        teamMemberRole: "Head Barber",
        teamMemberPhoto: "/images/team/Pavel Lazebník - U LAZEBNÍKA.jfif"
    },
    {
        teamMemberName: "Tadeáš",
        teamMemberRole: "Barber",
        teamMemberPhoto: "/images/team/Tadeáš - U LAZEBNÍKA.jfif"
    },
    {
        teamMemberName: "Erika",
        teamMemberRole: "Barber",
        teamMemberPhoto: "/images/team/Erika - U LAZEBNÍKA.jfif"
    }
];

const Team = () => {
    return (
        <section className="bg-[var(--white-1)] py-24 border-t border-[var(--white-2)] team" id="team">
            <div className="max-w-7xl mx-auto px-6 text-center team-wrapper">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase team-main-heading section-main-heading">
                    náš team
                </h2>
                <p className="text-lg mb-6 team-main-subheading section-main-subheading">
                    Kdo pracuje v Barbershopu
                    {" "}
                    <span className="font-semibold text-[var(--brown-1)] uppercase">
                        u Lazebníka
                    </span>
                    {" "}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 team-members-wrapper">
                    {teamMembers.map((teamMember) => (
                        <div
                        key={teamMember.teamMemberName}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform team-member-card">
                            <img
                            src={teamMember.teamMemberPhoto}
                            alt={teamMember.teamMemberName}
                            loading="lazy"
                            decoding="async"
                            className="h-32 w-32 rounded-full object-cover mb-4 team-member-card-photo" />
                            <h3 className="text-xl font-bold text-gray-900 team-member-card-heading">
                                {teamMember.teamMemberName}
                            </h3>
                            <p className="text-gray-600 team-member-card-role">
                                {teamMember.teamMemberRole}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="rounded-2xl mt-8 py-24 bg-gray-50 about-barber-sho" id="about-barbershop">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center about-barbershop-wrapper">
                        <div className="about-barber-shop-text-content-wrapper">
                            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900 mb-6 about-barbershop-main-heading section-main-heading">
                                O našem podniku
                            </h2>
                            <p className="text-lg text-gray-700 mb-4 about-barber-shop-main-subheading section-main-subheading">
                                Jsme moderní barbershop v srdci města, který spojuje klasické řemeslo
                                s prémiovými službami. Nabízíme střihy, úpravy vousů i relaxační procedury.
                            </p>
                            <p className="text-lg text-gray-700 about-barber-shop-main-second-subheading section-main-subheading">
                                Naším cílem je, abyste od nás odcházeli nejen s perfektním účesem,
                                ale i s úsměvem.
                            </p>
                        </div>
                        <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-lg about-barber-shop-map-wrapper">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.3376759670527!2d14.669171412073265!3d50.09868621251041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bf3b3325a7d6d%3A0x705193bc6a02f67d!2sBarbershop%20U%20Lazebn%C3%ADka%20%7C%20Praha%20-%20Kl%C3%A1novice!5e0!3m2!1scs!2scz!4v1756206971157!5m2!1scs!2scz"
                            height="100%"
                            width="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;