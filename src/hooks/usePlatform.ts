
import usePlatforms from "./usePlatforms";
import { Platform } from "../entities/Platform";

const usePlatform = (id?: number) =>{
    const {data: platforms} = usePlatforms();

    return platforms.find((p) => p.id === id);

}


export default usePlatform;