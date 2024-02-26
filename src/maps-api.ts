import axios, { AxiosResponse } from 'axios';
import { Address, TomTomSearch } from './tomtom-api-type';

export type PlaceAddress = {
    placeId: string
    address: Address
}

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<PlaceAddress[]> {
    const autocomplete: AxiosResponse<TomTomSearch> = await axios.get(`https://api.tomtom.com/search/2/search/${address}.json'`, {
        params: {
            key,
            limit: 100,
        }
    });
    return autocomplete.data.results?.map((result) => {
        return {
            placeId: result.id,
            address: result.address
        }
    }) ?? []
}
