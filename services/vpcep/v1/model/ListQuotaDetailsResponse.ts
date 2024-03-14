import { ResourcesResponseBody } from './ResourcesResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaDetailsResponse extends SdkResponse {
    public quotas?: ResourcesResponseBody;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ResourcesResponseBody): ListQuotaDetailsResponse {
        this['quotas'] = quotas;
        return this;
    }
}