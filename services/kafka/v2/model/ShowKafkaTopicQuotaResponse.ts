import { KafkaTopicQuota } from './KafkaTopicQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicQuotaResponse extends SdkResponse {
    public quotas?: Array<KafkaTopicQuota>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<KafkaTopicQuota>): ShowKafkaTopicQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withCount(count: number): ShowKafkaTopicQuotaResponse {
        this['count'] = count;
        return this;
    }
}