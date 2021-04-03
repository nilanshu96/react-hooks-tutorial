const { useEffect } = import('react');

const useFetch = (url) => {

    useEffect(async() => {
        const data = await fetch(url).then(resp => resp.text());
        console.log(data);
    });

}

export default useFetch;