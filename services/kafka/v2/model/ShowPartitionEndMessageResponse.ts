
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartitionEndMessageResponse extends SdkResponse {
    public topic?: string;
    public partition?: number;
    public offset?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withTopic(topic: string): ShowPartitionEndMessageResponse {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionEndMessageResponse {
        this['partition'] = partition;
        return this;
    }
    public withOffset(offset: number): ShowPartitionEndMessageResponse {
        this['offset'] = offset;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPartitionEndMessageResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}