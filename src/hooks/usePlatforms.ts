import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>{
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => {
            return apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents")
            .then((res) => res.data.results)
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: platforms.results

    })
}

export default usePlatforms