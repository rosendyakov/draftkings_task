import { useQuery } from "@tanstack/react-query"
import { getFilms, getResidents, getResults, getSingleResult, getSpecies, getStarships, getVehicles } from "../services/getResults";
import { QUERY_STALE_TIME } from "../utils/constants/constants";
import { Person, Planet, Starship, Vehicle } from "../utils/types/types";

const useResults = (category: string, searchQuery: string) => {  
  return useQuery({
  queryKey: ["results", category, searchQuery], 
   // staleTIme is needed because react router unmounts and
   // mounts the component and react query makes a request every 
   // time the component is mounted, which we are trying to avoid here.
  queryFn: () => getResults(category, searchQuery), staleTime: QUERY_STALE_TIME});

}

const useFilms = (urls: string[], isEnabled: boolean) => {
  return useQuery({
    queryKey: ["films", urls],
    queryFn: () => getFilms(urls),
    staleTime: QUERY_STALE_TIME,
    enabled: isEnabled
  })
}

const useSpecies = (urls: string[], isEnabled: boolean) => {
  return useQuery({
    queryKey: ["species", urls],
    queryFn: () => getSpecies(urls),
    staleTime: QUERY_STALE_TIME,
    enabled: isEnabled
  })
}

const useVehicles = (urls: string[], isEnabled: boolean) => {
  return useQuery({
    queryKey: ["vehicles", urls],
    queryFn: () => getVehicles(urls),
    staleTime: QUERY_STALE_TIME,
    enabled: isEnabled
  })
}

const useStarships = (urls: string[], isEnabled: boolean) => {
  return useQuery({
    queryKey: ["starships", urls],
    queryFn: () => getStarships(urls),
    staleTime: QUERY_STALE_TIME,
    enabled: isEnabled
  })
}

const useResidents = (urls: string[], isEnabled: boolean) => {
  return useQuery({
    queryKey: ["residents", urls],
    queryFn: () => getResidents(urls),
    staleTime: QUERY_STALE_TIME,
    enabled: isEnabled
  })
}


const useSingleResult = <T extends Person | Planet | Vehicle | Starship>(
  category: string,
  id: string
) => {
  return useQuery<T>({
    queryKey: [category, id],
    queryFn: () => getSingleResult<T>(category, id),
    staleTime: QUERY_STALE_TIME,
  });
};


export {
  useResults,
  useFilms,
  useSpecies,
  useVehicles,
  useStarships,
  useResidents,
  useSingleResult
}