import { PartitionResp } from './PartitionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteKafkaTopicMessagesResponse extends SdkResponse {
    public partitions?: Array<PartitionResp>;
    public constructor() { 
        super();
    }
    public withPartitions(partitions: Array<PartitionResp>): DeleteKafkaTopicMessagesResponse {
        this['partitions'] = partitions;
        return this;
    }
}