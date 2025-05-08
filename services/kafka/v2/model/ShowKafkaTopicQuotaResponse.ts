import { KafkaTopicQuota } from './KafkaTopicQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicQuotaResponse extends SdkResponse {
    public partitions?: Array<KafkaTopicQuota>;
    public constructor() { 
        super();
    }
    public withPartitions(partitions: Array<KafkaTopicQuota>): ShowKafkaTopicQuotaResponse {
        this['partitions'] = partitions;
        return this;
    }
}