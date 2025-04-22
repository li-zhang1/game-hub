import { GameQuery } from "../App";
import usePlatforms, { Platform } from "./usePlatforms";

const usePlatform = (id?: number) =>{
    const {data: platforms} = usePlatforms();

    return platforms.find((p) => p.id === id);

}


export default usePlatform;