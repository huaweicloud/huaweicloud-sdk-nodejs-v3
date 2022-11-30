import { ShowQuota } from './ShowQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: Array<ShowQuota>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<ShowQuota>): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}