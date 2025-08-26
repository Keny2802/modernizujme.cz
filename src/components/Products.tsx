type Product = {
    productName: string,
    productDescription: string
};

const products: Product[] = [
    {
        productName: "Truefitt & Hill Sandalwood krém na holení",
        productDescription: "Luxusní krém na holení s elegantní vůní santalového dřeva, který zajišťuje dokonalý a pohodlný zážitek při holení. Je navržen tak, aby pokožku zjemnil, hydratoval a chránil před podrážděním."
    },
    {
        productName: "Beviro Oleje na vousy - Bergamia Wood & Honkatonk Vanilla",
        productDescription: " Prémiové oleje na vousy, které kombinují výjimečnou péči o vousy i pokožku s jedinečnými vůněmi. Změkčují vousy, vyživují pokožku a zamezují svědění, zatímco dodávají stylovou vůni."
    },
    {
        productName: "Beviro Sea Salt Spray - Medium Hold",
        productDescription: "Stylingový sprej s mořskou solí pro přirozený, ležérní vzhled s objemem a texturou. Střední fixace zajistí tvar účesu bez slepení a zatížení vlasů"
    },
    {
        productName: "Uppercut Deluxe Matte Pomade",
        productDescription: "Profesionální pomáda s matným finišem a střední fixací, která udrží váš účes po celý den bez zatížení a slepení. Ideální pro přirozený i strukturovaný styling."
    },
    {
        productName: "Truefitt & Hill - Prémiová péče pro vaše vlasy",
        productDescription: "Dopřejte svým vlasům luxusní péči s kombinací šamponu a kondicionéru Truefitt & Hill. Společně zajistí maximální hydrataci, ochranu a zdravý vzhled."
    },
    {
        productName: "Beviro Parfémy - Bohemian Spirit & Sophisticate",
        productDescription: "Kolekce jedinečných vůní, které podtrhnou váš styl a dodají vám sebevědomí. Ať už preferujete svěží kolínskou nebo sofistikovanou toaletní vodu, každý produkt nabízí dlouhotrvající a nezapomenutelný zážitek."
    },
    {
        productName: "Truefitt & Hill - Luxusní duo kolínských vod",
        productDescription: "Dopřejte si dokonalou kombinaci elegance a mužnosti s kolínskými Apsley a Sandalwood od Truefitt & Hill. Tyto vůně podtrhnou váš styl a dodají vám sebevědomí na celý den."
    },
    {
        productName: "Beviro Matt Paste - Medium Hold",
        productDescription: "Stylingová pasta se střední fixací pro přirozený matný vzhled bez zatížení. Skvělá volba pro upravený, ale flexibilní účes, který vydrží celý den."
    },
    {
        productName: "Beviro Natural Beard Booster",
        productDescription: "Unikátní sérum pro podporu růstu a hustoty vousů s přírodním složením. Stimuluje vlasové folikuly, zlepšuje zdraví pokožky a pomáhá dosáhnout plnějších vousů."
    },
    {
        productName: "Beviro Forever Young Eye Serum & Elixir 2.0",
        productDescription: "Pokročilá péče o pleť pro svěží a mladistvý vzhled. Kombinace séra na oční okolí a elixíru pro celkovou regeneraci pleti hydratuje, zpevňuje a pomáhá redukovat vrásky i známky únavy."
    },
    {
        productName: "Truefitt & Hill Sandalwood Aftershave Balm",
        productDescription: "Balzám po holení, který pokožku zklidňuje, hydratuje a chrání před podrážděním."
    },
    {
        productName: "Beviro Šampony - Daily, Anti-Dandruff & Anti-Hairloss",
        productDescription: "Prémiové šampony pro každodenní péči o vlasy a pokožku hlavy. Ať už potřebujete jemné čištění, boj proti lupům nebo prevenci vypadávání vlasů, Beviro má řešení pro každý typ vlasů."
    },
    {
        productName: "Beviro Balzámy na vousy - Bergamia Wood & Cinnamon Season",
        productDescription: "Vysoce kvalitní balzámy na vousy, které kombinují styling a výživu v jednom kroku. Pomáhají tvarovat vousy, dodávají jim zdravý vzhled a chrání pokožku před podrážděním."
    },
    {
        productName: "Beviro Magic Powder - Medium Hold",
        productDescription: "Stylingový pudr, který během pár vteřin dodá vlasům objem, texturu a přirozený matný vzhled. Střední fixace zajistí upravený, ale flexibilní účes bez slepení."
    },
];

const Products = () => {
    return (
        <section className="bg-[var(--white-1)] py-24 border-t border-[var(--white-2)] products" id="products">
            <div className="max-w-7xl mx-auto px-6 text-center products-wrapper">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase text-gray-900 products-main-heading section-main-heading">
                    Naše Produkty
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 product-boxes">
                    {products.map((product, productIndex) => {
                    // dynamicky vytváří cestu k obrázku
                        const productImagePath = `/images/produkty/produkt (${productIndex + 1}).jpg`;

                        return (
                            <div 
                            key={product.productName}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform product">
                                <img
                                src={productImagePath}
                                alt={product.productName}
                                loading="lazy"
                                decoding="async"
                                className="h-48 w-full object-cover rounded-xl mb-4 product-image" />
                                <h3 className="text-xl font-bold text-[var(--brown-1)] mb-2 product-heading">
                                    {product.productName}
                                </h3>
                                <p className="text-gray-700 text-sm mb-4 product-subheading">
                                    {product.productDescription}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};

export default Products;