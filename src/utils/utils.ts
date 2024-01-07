import { CategoryApiResponse } from "./types/types";

const sortedArrayDesc = (objectsArray: CategoryApiResponse[]) => Array.from(objectsArray).sort((a, b) => b.count - a.count);

const getFilmIds = (filmUrls: string[]) => {
  const filmIds = filmUrls.map(filmUrl => filmUrl.match(/(\d+)/g));
  return filmIds;
};

export {
  sortedArrayDesc,
  getFilmIds
}