import { BASE_URL, CategoryEnum, ENDPOINTS } from "../utils/constants/constants"

const getData = async (category: string, searchQuery: string) => {
  const url = new URL(`${BASE_URL}${category.toLowerCase()}`);
  if(searchQuery) {
    url.searchParams.append('search', searchQuery);    
  }
  const response = await fetch(url.toString());
  return response.json();
};

const getResults = async (category: string, searchQuery: string) => {
  if (category.toLowerCase() === CategoryEnum.All) {
    const promises = ENDPOINTS.map(endpoint => getData(endpoint, searchQuery));
    return await Promise.all(promises);
  } else {
    return await getData(category, searchQuery);
  }
}

export {
  getResults
}
