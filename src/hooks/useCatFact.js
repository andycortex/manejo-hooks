import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
    const [fact, setFact] = useState("");
    const getRefreshRandomFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
    useEffect(getRefreshRandomFact, []);
    return {
      fact,
      getRefreshRandomFact,
    }
  }