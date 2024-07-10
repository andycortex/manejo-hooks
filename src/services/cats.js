export const getCatImage = async (word) => {
    const res = await fetch(
        `https://cataas.com/cat/says/${word}?size=50&color=red&json=true`
    );
    const response = await res.json();
    const { url } = response;
    return url;
} 