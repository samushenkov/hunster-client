
import { serializeSearchParams } from './uri';

export async function fetchAsync({ url, baseUrl, method, data }) {

    if (url == null) {
        throw new Error('InvalidOperationException');
    }

    if (url.startsWith('/')) {
        if (baseUrl) {
            url = baseUrl + url;
        }
    }

    if (method == null) {
        method = 'POST';
    }
    if (method === 'GET' ||
        method === 'HEAD') {

        const urlSearchParams = serializeSearchParams(data);

        if (urlSearchParams) {
            url += '?' + urlSearchParams;
        }

        // Ensure data is not present
        data = null;
    }

    const request = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow'
    };

    if (data != null) {
        // Initialize body
        request.body = JSON.stringify(data);
    }

    const response = await fetch(url, request);
    const responseContentType = response.headers.get('content-type');

    let responseContent = null;

    if (responseContentType) {

        if (responseContentType.startsWith('application/json')) {
            responseContent = response.json();
        }

        if (responseContentType.startsWith('text/plain')) {
            responseContent = response.text();
        }

        // todo: handle other content-type variants
    }

    if (response.ok) {
        return responseContent;
    }

    return Promise.reject(responseContent);
}