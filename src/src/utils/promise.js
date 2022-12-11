
export function waitTimeoutAsync(timeout) {

    return new Promise(resolve => setTimeout(resolve, timeout));
}