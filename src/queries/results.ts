import { useQuery } from "@tanstack/react-query"
import { getResults } from "../services/getResults";

export const useResults = (category: string, searchQuery: string) => {  
  return useQuery({queryKey: ["results", category, searchQuery], queryFn: () => getResults(category, searchQuery)});
}