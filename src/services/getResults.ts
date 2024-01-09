import { BASE_URL, CATEGORY_ENUM, ENDPOINTS } from "../utils/constants/constants"
import { AllApiResponses, CategoryApiResponse, Film, Person, Planet, Species, Starship, Vehicle } from "../utils/types/types";


/*
  Make a single request to the api.
  It takes in the category, searchQuery and page number as parameters.
*/
const getData = async (category: string, searchQuery: string, page: number): Promise<CategoryApiResponse> => {
  let url;
  if(page === 1){
    url = new URL(`${BASE_URL}${category}?search=${searchQuery}`);
  } else {
    url = new URL(`${BASE_URL}${category}?search=${searchQuery}&page=${page}`);
  }
  const response = await fetch(url.toString());
  return response.json();
};

/*
  Make multiple requests to the api.
  It takes in the searchQuery and page number as parameters.
*/
const getAllData = async (searchQuery: string, page: number): Promise<AllApiResponses> => {
  const promises = ENDPOINTS.map(endpoint => getData(endpoint, searchQuery, page));
  const response = await Promise.all(promises);
  return response;
};

/*
  Get results from the api.
  It takes in the category, searchQuery and page number as parameters.
  Used as a queryFn in the useResults hook.
*/
const getResults = async (category: string, searchQuery: string, page: number): Promise<AllApiResponses | CategoryApiResponse> => {
  if (category === CATEGORY_ENUM.All) {
    const response = await getAllData(searchQuery, page);
    return response;
  } else {
    const response = await getData(category, searchQuery, page);
    return response;
  }
};

/*
  Get a single category from the api.
  It takes an array of urls.
  Used as a queryFn in the useFilms, useSpecies, useVehicles, useStarships and useResidents hooks.
*/
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

/*
  Get a single result from the api.
  It takes in the category and id as parameters.
  Used as a queryFn in the useSingleResult hook.
*/
const getSingleResult = async <T extends Person | Planet | Vehicle | Starship>(
  category: string,
  id: string
): Promise<T> => {  const url = new URL(`${BASE_URL}${category}/${id}`);
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