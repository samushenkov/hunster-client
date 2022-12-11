
import { ApiBase } from 'managers/api/apiBase';

export class HunsterApi extends ApiBase {

    async getLastMatchAsync({ version }) {

        const match = await this.invokeAsync(
            { url: `/hunster/${version}`, method: 'GET' }
        );

        return match;
    }
}