export interface TomTomSearch {
    summary: Summary;
    results?: ResultsEntity[] | null;
}
export interface Summary {
    query: string;
    queryType: string;
    queryTime: number;
    numResults: number;
    offset: number;
    totalResults: number;
    fuzzyLevel: number;
    queryIntent?: null[] | null;
}
export interface ResultsEntity {
    type: string;
    id: string;
    score: number;
    address: Address;
    position: TopLeftPointOrBtmRightPointOrPosition;
    viewport: Viewport;
    entryPoints?: EntryPointsEntity[] | null;
}
export interface Address {
    streetNumber: string;
    streetName: string;
    municipalitySubdivision?: string | null;
    municipality: string;
    neighbourhood?: string | null;
    countrySecondarySubdivision: string;
    countrySubdivision: string;
    countrySubdivisionName: string;
    countrySubdivisionCode: string;
    postalCode: string;
    countryCode: string;
    country: string;
    countryCodeISO3: string;
    freeformAddress: string;
    localName: string;
}
export interface TopLeftPointOrBtmRightPointOrPosition {
    lat: number;
    lon: number;
}
export interface Viewport {
    topLeftPoint: TopLeftPointOrBtmRightPointOrPosition;
    btmRightPoint: TopLeftPointOrBtmRightPointOrPosition;
}
export interface EntryPointsEntity {
    type: string;
    position: TopLeftPointOrBtmRightPointOrPosition;
}
