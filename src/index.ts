import { getPlaceAutocomplete } from './maps-api';


export type AutoCompleteDetails = {
    placeId: string
    streetNumber: string
	streetName: string
	municipalitySubdivision: string | null | undefined
	municipality: string
	postalCode: string
	countrySubdivisionName: string
	countrySubdivisionCode: string
    countryCode: string
    country: string
    freeformAddress: string
}

export async function getAutoCompleteDetails(address: string): Promise<AutoCompleteDetails[]> {
    const apiKey = process.env.TOMTOM_API_KEY;
    if (!apiKey) throw Error('Missing TOMTOM_API_KEY')

    // get autocomplete results
    const autocompleteResults = await getPlaceAutocomplete(apiKey, address)
    
    // loop over and get details and map results
    return autocompleteResults
		?.filter(p => p.address.countryCode == 'AU')
		.map(p => ({
			placeId: p.placeId,
			streetNumber: p.address.streetNumber,
			streetName: p.address.streetName,
			municipality: p.address.municipality,
			municipalitySubdivision: p.address.municipalitySubdivision,
			countrySubdivisionCode: p.address.countrySubdivisionCode,
			countrySubdivisionName: p.address.countrySubdivisionName,
			countryCode: p.address.countryCode,
			postalCode: p.address.postalCode,
			country: p.address.country,
			freeformAddress: p.address.freeformAddress,
		}))
}
