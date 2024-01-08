import { useQuery } from "@tanstack/react-query"
import { getFilms, getResults, getSingleResult } from "../services/getResults";
import { QUERY_STALE_TIME } from "../utils/constants/constants";

const useResults = (category: string, searchQuery: string) => {  
  return useQuery({
  queryKey: ["results", category, searchQuery], 
   // staleTIme is needed because react router unmounts and
   // mounts the component and react query makes a request every 
   // time the component is mounted, which we are trying to avoid here.
  queryFn: () => getResults(category, searchQuery), staleTime: QUERY_STALE_TIME});

}

const useFilms = (urls: string[]) => {
  return useQuery({
    queryKey: ["films", urls],
    queryFn: () => getFilms(urls),
    staleTime: QUERY_STALE_TIME
  })
}

const useSingleResult = (category: string, id: string) => {
  return useQuery({
    queryKey: [category, id],
    queryFn: () => getSingleResult(category, id),
    staleTime: QUERY_STALE_TIME
  })
}

export {
  useResults,
  useFilms,
  useSingleResult
}