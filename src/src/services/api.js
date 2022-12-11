import { HunsterApi } from 'managers/api/hunster/hunsterApi';

export const hunsterApi = new HunsterApi({
    baseUrl: process.env.REACT_APP_URL_API_HUNSTER
});