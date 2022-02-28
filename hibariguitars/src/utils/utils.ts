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
        const correctBrand = filters["brands"].length === 0 ? true : filters["brands"].reduce((acc: boolean, brand: string) => guitar.name.toLowerCase().includes(brand.toLowerCase()) ? acc = true : acc, false);
        const correctType = filters["types"].length === 0 ? true : filters["types"].reduce((acc: boolean, guitarType: string) => guitar.type.toLowerCase().includes(guitarType.toLowerCase()) ? acc = true : acc, false);
        const correctSeller = filters["sellers"].length === 0 ? true : filters["sellers"].reduce((acc: boolean, seller: string) => guitar.website.toLowerCase().includes(seller.toLowerCase()) ? acc = true : acc, false);
        return correctBrand && correctType && correctSeller;
    });
}

export function applySearch(data: any, input: string) {
    console.log(input)
    return input !== "" ? data.filter((guitar: GuitarProps) => guitar.name.toLowerCase().includes(input.toLowerCase())) : data
}


export function applySort(data: any, order: string) {
    const newArr = [...data]
    if (order === "low") {
        newArr.sort((a: GuitarProps, b: GuitarProps) => parseFloat(a.price.replace(/[$,]/g, '')) > parseFloat(b.price.replace(/[$,]/g, '')) ? 1 : -1)
        return newArr;
    } else if (order === "high") {
        newArr.sort((a: GuitarProps, b: GuitarProps) => parseFloat(a.price.replace(/[$,]/g, '')) < parseFloat(b.price.replace(/[$,]/g, '')) ? 1 : -1)
        return newArr;
    } else if (order === "alpha-low") {
        newArr.sort((a: GuitarProps, b: GuitarProps) => a.name > b.name ? 1 : -1)
        return newArr;
    } else if (order === "alpha-high") {
        newArr.sort((a: GuitarProps, b: GuitarProps) => a.name < b.name ? 1 : -1)
        return newArr;
    } else {
        return newArr;
    }
}