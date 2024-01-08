import { BASE_URL, CATEGORY_ENUM, ENDPOINTS } from "../utils/constants/constants"
import { AllApiResponses, CategoryApiResponse, Film, Starship, Vehicle } from "../utils/types/types";



const getData = async (category: string, searchQuery: string): Promise<CategoryApiResponse> => {
  const url = new URL(`${BASE_URL}${category.toLowerCase()}`);
  if (searchQuery) {
    url.searchParams.append('search', searchQuery);
  }
  const response = await fetch(url.toString());
  return response.json();
};

const getAllData = async (searchQuery: string): Promise<AllApiResponses> => {
  const promises = ENDPOINTS.map(endpoint => getData(endpoint, searchQuery));
  const response = await Promise.all(promises);
  return response;
};

const getResults = async (category: string, searchQuery: string): Promise<AllApiResponses | CategoryApiResponse> => {
  if (category.toLowerCase() === CATEGORY_ENUM.All) {
    const response = await getAllData(searchQuery);
    return response;
  } else {
    const response = await getData(category, searchQuery);
    return response;
  }
};

const getFilms = async (urls: string[]): Promise<Film[]> => {
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  const response = await Promise.all(promises);
  return response;
}

const getVehicles = async (urls: string[]): Promise<Vehicle[]> => {
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  const response = await Promise.all(promises);
  return response;
}

const getStarships = async (urls: string[]): Promise<Starship[]> => {
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  const response = await Promise.all(promises);
  return response;
}

const getSingleResult = async (category: string, id: string): Promise<CategoryApiResponse> => {
  const url = new URL(`${BASE_URL}${category.toLowerCase()}/${id}`);
  const response = await fetch(url.toString());
  return response.json();
}

export {
  getResults,
  getFilms,
  getVehicles,
  getStarships,
  getSingleResult
};