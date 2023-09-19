import { TopicEntity } from './TopicEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTopicsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    private 'remain_partitions'?: number;
    private 'max_partitions'?: number;
    private 'topic_max_partitions'?: number;
    public topics?: Array<TopicEntity>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceTopicsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListInstanceTopicsResponse {
        this['size'] = size;
        return this;
    }
    public withRemainPartitions(remainPartitions: number): ListInstanceTopicsResponse {
        this['remain_partitions'] = remainPartitions;
        return this;
    }
    public set remainPartitions(remainPartitions: number  | undefined) {
        this['remain_partitions'] = remainPartitions;
    }
    public get remainPartitions(): number | undefined {
        return this['remain_partitions'];
    }
    public withMaxPartitions(maxPartitions: number): ListInstanceTopicsResponse {
        this['max_partitions'] = maxPartitions;
        return this;
    }
    public set maxPartitions(maxPartitions: number  | undefined) {
        this['max_partitions'] = maxPartitions;
    }
    public get maxPartitions(): number | undefined {
        return this['max_partitions'];
    }
    public withTopicMaxPartitions(topicMaxPartitions: number): ListInstanceTopicsResponse {
        this['topic_max_partitions'] = topicMaxPartitions;
        return this;
    }
    public set topicMaxPartitions(topicMaxPartitions: number  | undefined) {
        this['topic_max_partitions'] = topicMaxPartitions;
    }
    public get topicMaxPartitions(): number | undefined {
        return this['topic_max_partitions'];
    }
    public withTopics(topics: Array<TopicEntity>): ListInstanceTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}