import { BASE_URL, CATEGORY_ENUM, ENDPOINTS } from "../utils/constants/constants"
import { AllApiResponses, CategoryApiResponse } from "../utils/types/types";



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

export {
  getResults
};