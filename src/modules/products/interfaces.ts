interface ProducRowResponse {
    CodProdus: string;
    Stoc: string;
    adresa: string;
    id_magazin: string;
    magazin: string;
    oras: string;
    regiune: string;
    stocrezComFurnizori: string;
    url_site: string;
}

export interface ProductResponse {
    success: boolean;
    rows: ProducRowResponse[];
    totalCount: number;
}
