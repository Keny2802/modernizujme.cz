const PricingFilterTab = () => {
    return (
        <div className="flex justify-center flex-wrap gap-8 mb-6 text-white filter-tab">
            <button className="px-4 py-2 rounded-xl cursor-pointer bg-[var(--brown-1)] filter-tab-btn" data-filter-tab-btn-type="all">
                Vše
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="hair">
                Střihy
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="beard">
                Vousy & Holení
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="packs">
                Balíčky
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="quick">
                Rychlovky
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="extra">
                Extra
            </button>
            <button className="px-4 py-2 rounded-xl cursor-pointer border border-gray-400 text-black filter-tab-btn" data-filter-tab-btn-type="premium">
                Premium
            </button>
        </div>
    );
};

export default PricingFilterTab;