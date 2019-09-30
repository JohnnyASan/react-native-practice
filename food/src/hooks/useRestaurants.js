import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchAPI = async (searchTerm, city) => {
        var location = city;
        var term = searchTerm;
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location
                }
            });
            setRestaurants(response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    };
    
    useEffect(() => {
        searchAPI('pasta', 'san jose');
    }, []);

    return [searchAPI, restaurants, errorMessage];
};