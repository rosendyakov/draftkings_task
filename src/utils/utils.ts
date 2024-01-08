import { CategoryApiResponse } from "./types/types";

const sortedArrayDesc = (objectsArray: CategoryApiResponse[]) => Array.from(objectsArray).sort((a, b) => b.count - a.count);

const getFilmIds = (filmUrls: string[]) => {
  const filmIds = filmUrls.map(filmUrl => filmUrl.match(/(\d+)/g));
  return filmIds;
};

const getUrlPathName = (url: string) => {
  const newUrl = new URL(url);
  // Remove the leading "/api" part
  const relevantPath = newUrl.pathname.slice(4);
  return relevantPath;
}

export {
  sortedArrayDesc,
  getFilmIds,
  getUrlPathName
}