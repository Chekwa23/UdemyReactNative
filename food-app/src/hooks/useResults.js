import {useState, useEffect} from 'react'
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorText, setErrorText] = useState(null)

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'iowa'
                }
            });
            setResults(response.data.businesses);
        } catch(e){
            setErrorText("Error!!!")
        }
    }

    useEffect(() => {
        searchApi("pasta")
        return () => {
        }
    }, [])

    return [searchApi, results, errorText];
};