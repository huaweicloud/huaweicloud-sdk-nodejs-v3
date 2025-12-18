import { KafkaTopicQuotaResp } from './KafkaTopicQuotaResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicQuotaResponse extends SdkResponse {
    public quotas?: Array<KafkaTopicQuotaResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<KafkaTopicQuotaResp>): ShowKafkaTopicQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withCount(count: number): ShowKafkaTopicQuotaResponse {
        this['count'] = count;
        return this;
    }
}