import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');
export interface Genre{
    id: number;
    name: string;
    image_background: string;
}
// const useGenres = () => ({data: genres, error: null, isLoading: false})
const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: genres.results
                  })
        
}
export default useGenres;