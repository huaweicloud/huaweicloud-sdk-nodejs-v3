
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartitionBeginningMessageResponse extends SdkResponse {
    public topic?: string;
    public partition?: number;
    public offset?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withTopic(topic: string): ShowPartitionBeginningMessageResponse {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowPartitionBeginningMessageResponse {
        this['partition'] = partition;
        return this;
    }
    public withOffset(offset: number): ShowPartitionBeginningMessageResponse {
        this['offset'] = offset;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPartitionBeginningMessageResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}