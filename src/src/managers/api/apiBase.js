
import { fetchAsync } from 'utils/fetch';

export class ApiBase {

    constructor({ baseUrl }) {

        this._baseUrl = baseUrl;
    }

    invokeAsync({ baseUrl, ...metadata }) {

        if (baseUrl == null) {
            baseUrl = this._baseUrl;
        }
        if (baseUrl == null) {
            throw new Error('ConfigurationErrorException');
        }

        return fetchAsync({ baseUrl, ...metadata });
    }
}