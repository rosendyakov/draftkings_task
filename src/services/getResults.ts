import { BASE_URL, CATEGORY_ENUM, ENDPOINTS } from "../utils/constants/constants"
import { AllApiResponses, CategoryApiResponse, Film, Person, Planet, Species, Starship, Vehicle } from "../utils/types/types";



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


const fetchSingleData = async <T>(urls: string[]): Promise<T[]> => {
  const promises = urls.map(url => fetch(url).then(response => response.json()));
  const response = await Promise.all(promises);
  return response;
}

const getFilms = (urls: string[]): Promise<Film[]> => fetchSingleData(urls);
const getSpecies = (urls: string[]): Promise<Species[]> => fetchSingleData(urls);
const getVehicles = (urls: string[]): Promise<Vehicle[]> => fetchSingleData(urls);
const getStarships = (urls: string[]): Promise<Starship[]> => fetchSingleData(urls);
const getResidents = (urls: string[]): Promise<Person[]> => fetchSingleData(urls);


const getSingleResult = async <T extends Person | Planet | Vehicle | Starship>(
  category: string,
  id: string
): Promise<T> => {  const url = new URL(`${BASE_URL}${category.toLowerCase()}/${id}`);
  const response = await fetch(url.toString());
  return response.json();
}

export {
  getResults,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships,
  getResidents,
  getSingleResult
};