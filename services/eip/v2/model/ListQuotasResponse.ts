import { ResourceResp } from './ResourceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: ResourceResp;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ResourceResp): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}