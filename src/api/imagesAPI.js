import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25771458-4b84856cce3db4b732d55d157';

const fetchImages = async (search,page) => {
    const result = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return result;
}

export default fetchImages;