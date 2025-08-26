import { useState } from "react";
import clsx from "clsx";

type Service = {
    serviceName: string,
    serviceDescription: string,
    servicePrice: string,
    serviceLabel: string,
    serviceCategory: "classic" | "premium"
};

const categories = {
    "Vše": (service: Service) => true,

    "Střihy": (service: Service) =>
        ["Klasický střih", "Dětský střih do 14 let", "Střih strojkem", "Klasický střih PREMIUM"]
            .includes(service.serviceName),
    
    "Vousy & Holení": (service: Service) =>
        ["Úprava vousů", "Barvení vousů", "Střih strojkem a úprava vousů", "Holení hlavy a úprava vousů", "Holení do hladka (hlava, tvář)"]
            .includes(service.serviceName),
    
    "Balíčky": (service: Service) =>
        ["Kompletka", "Kompletka PREMIUM"]
            .includes(service.serviceName),
        
    "Rychlovky": (service: Service) =>
        ["Úprava vousů", "Střih strojkem", "Holení do hladka (hlava, tvář)", "Dětský střih do 14 let"]
            .includes(service.serviceName),

    "Extra": (service: Service) =>
        ["Dodatečná úprava"]
        .includes(service.serviceName),

    "Premium": (service: Service) =>
        service.serviceCategory === "premium"
};

const Pricing = () => {
    const [active, setActive] = useState<keyof typeof categories>("Vše");

    const services: Service[] = [
        {
            serviceName: "Klasický střih",
            serviceDescription: "Střih podle výběru, mytí, foukání, kosmetika a styling - 45 minut podle složitosti účesu",
            servicePrice: "690 Kč",
            serviceLabel: "Střihy",
            serviceCategory: "classic"
        },
        {
            serviceName: "Kompletka",
            serviceDescription: "Stříhání a úprava vousů (včetně napářky) podle výběru, mytí, foukání, kosmetika a styling - 60 minut",
            servicePrice: "990 Kč",
            serviceLabel: "Balíčky",
            serviceCategory: "classic"
        },
        {
            serviceName: "Střih strojkem a úprava vousů",
            serviceDescription: "Jednodušší střih pouze strojkem, mytí, foukání. Tvarování vousů strojkem nebo vůžkami, napaření horkým ručníkem, zaholení břitvou, ošetření kosmetikou - 60 minut",
            servicePrice: "860 Kč",
            serviceLabel: "Vousy & Holení",
            serviceCategory: "classic"
        },
        {
            serviceName: "Úprava vousů",
            serviceDescription: "Tvarování vousů strojkem nebo nůžkami, napaření horkým ručníkem, zaholení břitvou, ošetření kosmetikou - 30 minut",
            servicePrice: "490 Kč",
            serviceLabel: "Vousy & Holení",
            serviceCategory: "classic"
        },
        {
            serviceName: "Dětský střih do 14 let",
            serviceDescription: "Střih podle výběru, mytí, foukání, kosmetika a styling",
            servicePrice: "550 Kč",
            serviceLabel: "Střihy",
            serviceCategory: "classic"
        },
        {
            serviceName: "Střih strojkem",
            serviceDescription: "Jednodušší střih pouze strojkem, mytí, foukání, kosmetika - 30 minut",
            servicePrice: "550 Kč",
            serviceLabel: "Střihy",
            serviceCategory: "classic"
        },
        {
            serviceName: "Holení hlavy a úprava vousů",
            serviceDescription: "Holení hlavy břitvou do hladka a úprava vousů, napářka, ošetření kosmetikou",
            servicePrice: "800 Kč",
            serviceLabel: "Vousy & Holení",
            serviceCategory: "classic"
        },
        {
            serviceName: "Holení do hladka (hlava, tvář)",
            serviceDescription: "Holení strojkem do hladka, napářka, holení břitvou do hladka, ošetření kosmetikou",
            servicePrice: "550 Kč",
            serviceLabel: "Vousy & Holení",
            serviceCategory: "classic"
        },
        {
            serviceName: "Dodatečná úprava",
            serviceDescription: "Zaholení kontur vlasů a vousů, trhání chloupků z nosu a uší, mytí, foukání, styling, barvení vousů, masáž hlavy",
            servicePrice: "150 Kč",
            serviceLabel: "Extra",
            serviceCategory: "classic"
        },
        {
            serviceName: "Barvení vousů",
            serviceDescription: "Barvení pomocí speciálních pánských barev na vousy, mytí, styling.",
            servicePrice: "150 Kč",
            serviceLabel: "Vousy & Holení",
            serviceCategory: "classic"
        },
        {
            serviceName: "Klasický střih PREMIUM",
            serviceDescription: "Klasický střih, depilace uší a nosu (voskem), masáž hlavy březovou vodou, ošetření prémiovou značkou kosmetiky",
            servicePrice: "990 Kč",
            serviceLabel: "Premium",
            serviceCategory: "premium"
        },
        {
            serviceName: "Kompletka PREMIUM",
            serviceDescription: "Kompletka, depilace uší a nosu (voskem), masáž hlavy březovou vodou, ošetření prémiovou značkou kosmetiky",
            servicePrice: "1390 Kč",
            serviceLabel: "Premium",
            serviceCategory: "premium"
        }
    ];

    const filteredServices = services.filter(categories[active]);

    return (
        <section className="bg-[var(--white-1)] py-24 border-t border-[var(--white-2)] pricing" id="pricing">
            <div className="max-w-7xl mx-auto px-6 text-center pricing-wrapper">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 uppercase text-gray-900 pricing-main-heading section-main-heading">
                    Ceník služeb
                </h2>
                {/* <PricingFilterTab /> */}
                <div className="flex justify-center flex-wrap gap-8 mb-6 text-white filter-tab">
                    {
                        Object.keys(categories).map((cat) => (
                            <button
                            key={cat}
                            onClick={() => setActive(cat as keyof typeof categories)}
                            className={clsx(
                                "px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn",
                                active === cat
                                ? "bg-[var(--brown-1)] text-white"
                                : "border border-gray-400 text-black"
                            )}>
                                {cat}
                            </button>
                        ))
                    }
                </div>
                <div className="grid md:grid-cols-2 gap-8 services-wrapper">
                    {
                        filteredServices.map((filteredService) => (
                            <div
                            key={filteredService.serviceName}
                            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform service">
                                <span className="bg-[var(--brown-1)] absolute top-4 right-3 text-white text-base font-semibold px-3 py-1 rounded-full service-label">
                                    {filteredService.serviceLabel}
                                </span>
                                <h4 className="text-xl text-[var(--brown-1)] font-bold mt-8 mb-2 service-heading">
                                    {filteredService.serviceName}
                                </h4>
                                <p className="text-lg mb-2 service-description">
                                    {filteredService.serviceDescription}
                                </p>
                                <p className="text-2xl font-extrabold text-[var(--brown-1)] service-price">
                                    {filteredService.servicePrice}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;