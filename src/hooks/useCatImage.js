import { useEffect, useState } from "react";
import { getCatImage } from "../services/cats";

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
      if (!fact) return
      const threeFirstWords = fact.split(" ", 3).join(" "); //fact.split(' ').slice(0,3).join(' ');
      getCatImage(threeFirstWords).then(newCatImage => setImageUrl(newCatImage))
  
    }, [fact]);
    return {
      imageUrl
    }
  }