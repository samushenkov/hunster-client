
export function serializeSearchParams(data) {

    let params = '';

    if (data) {

        for (const key in data) {

            const value = data[key];

            if (value === undefined) {
                continue;
            }

            if (params) {
                params += '&';
            }

            const paramKey = encodeURIComponent(key);
            const paramValue = encodeURIComponent(value);

            params += paramKey + '=' + paramValue;
        }
    }

    return params;
}