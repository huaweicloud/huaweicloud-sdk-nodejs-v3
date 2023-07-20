import { ShowResourcesListResponseBody } from './ShowResourcesListResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: ShowResourcesListResponseBody;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ShowResourcesListResponseBody): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}