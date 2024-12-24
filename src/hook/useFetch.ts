import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const resp = await fetch(url);
            const result = await resp.json();
            setData(result);
            setIsLoading(false);
        }
        fetchData();

    },[url])
    return { data, isLoading };
}
export default useFetch;