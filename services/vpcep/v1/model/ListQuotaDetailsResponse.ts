import { ResourcesResp } from './ResourcesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaDetailsResponse extends SdkResponse {
    public quotas?: ResourcesResp;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ResourcesResp): ListQuotaDetailsResponse {
        this['quotas'] = quotas;
        return this;
    }
}