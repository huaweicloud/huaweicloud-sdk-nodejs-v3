import { QuotaResp } from './QuotaResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaUserClientQuotaResponse extends SdkResponse {
    public quotas?: Array<QuotaResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<QuotaResp>): ShowKafkaUserClientQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withCount(count: number): ShowKafkaUserClientQuotaResponse {
        this['count'] = count;
        return this;
    }
}