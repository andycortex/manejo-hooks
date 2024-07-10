import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

// const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

function App() {
  
  const {fact,getRefreshRandomFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async() => {
    getRefreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="cat" />}
    </main>
  );
}

export default App;
