interface GuitarProps {
    name: string;
    website: string;
    type: string;
    price: string;
    link: string;
    image: string;
}

export function lowerString(word: string) {
    return word.toLowerCase().replace(/\s/g,'')
}

export function applyFilters(data: any, filters: any) {
    return data.filter((guitar: GuitarProps) => {
        const correctBrand = filters["brands"].every((brand: string) => lowerString(guitar.name).includes(lowerString(brand)));
        const correctType = filters["types"].every((type: string) => lowerString(guitar.type).includes(lowerString(type)));
        const correctSeller = filters["sellers"].every((seller: string) => lowerString(guitar.website).includes(lowerString(seller)));
        return correctBrand && correctType && correctSeller;
    });
}
