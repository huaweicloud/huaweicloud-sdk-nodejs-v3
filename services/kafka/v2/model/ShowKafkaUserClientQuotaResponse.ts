import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaUserClientQuotaResponse extends SdkResponse {
    public quotas?: Array<Quota>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<Quota>): ShowKafkaUserClientQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withCount(count: number): ShowKafkaUserClientQuotaResponse {
        this['count'] = count;
        return this;
    }
}