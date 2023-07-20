import { KafkaTopicPartitionResponsePartitions } from './KafkaTopicPartitionResponsePartitions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicPartitionsResponse extends SdkResponse {
    public total?: number;
    public partitions?: Array<KafkaTopicPartitionResponsePartitions>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopicPartitionsResponse {
        this['total'] = total;
        return this;
    }
    public withPartitions(partitions: Array<KafkaTopicPartitionResponsePartitions>): ListTopicPartitionsResponse {
        this['partitions'] = partitions;
        return this;
    }
}