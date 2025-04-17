
import axios from 'axios';

export function getAllImages(massege) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '33135653-4734ab6feb6e20c316e4b7aea',
    q: `${massege}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(baseURL, { params }).then(res => res.data.hits);
}
