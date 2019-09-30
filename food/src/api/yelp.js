import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QXbNcEWjP444P8PaFqkoDDf4_taEEMNdZxY5Wuz6oA3OuvzRpfOr1JOCJn6Cf_4HFJFA4-3C04J-ldhQotNY7V-3aScFDq77S4TfDuWhdCzSjbLB67NnHHqFRkSRXXYx'
    }
});

