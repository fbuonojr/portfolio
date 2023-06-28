import { useState } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatchers] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatchers(media.matches);
        }
        const listener = () => setMatchers(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;