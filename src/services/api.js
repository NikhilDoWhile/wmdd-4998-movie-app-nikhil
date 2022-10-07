import { BASE_URL, API_KEY } from "../config/api_config";

export const getMediaList = async (mediaType,sortType, page) => {
    try {
        const url = `${BASE_URL}/${mediaType}/${sortType}?api_key=${API_KEY}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getDetails = async (mediaType, id) => {
    try {
        const url = `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getSearchResults = async (mediaType,query) => {
    try {
        const url = `${BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${query}`;
        const response = await fetch(encodeURI(url));
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}