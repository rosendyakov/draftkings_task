import { useQuery } from "@tanstack/react-query"
import { getResults } from "../services/getResults";

export const useResults = (category: string, searchQuery: string) => {  
  return useQuery({
  queryKey: ["results", category, searchQuery], 
   // staleTIme is needed because react router unmounts and mounts the component and react query makes a request every time the component is mounted, which we are trying to avoid here.
  queryFn: () => getResults(category, searchQuery), staleTime: 1000 * 60 * 5});

}