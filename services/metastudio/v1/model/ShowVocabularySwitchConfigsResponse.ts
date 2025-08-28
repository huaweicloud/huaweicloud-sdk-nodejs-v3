import { SaveTtscTenantConfigsRequestBody } from './SaveTtscTenantConfigsRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVocabularySwitchConfigsResponse extends SdkResponse {
    public count?: number;
    public data?: Array<SaveTtscTenantConfigsRequestBody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowVocabularySwitchConfigsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<SaveTtscTenantConfigsRequestBody>): ShowVocabularySwitchConfigsResponse {
        this['data'] = data;
        return this;
    }
}