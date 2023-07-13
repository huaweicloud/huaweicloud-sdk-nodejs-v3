import { TopicEntity } from './TopicEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTopicsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    private 'remain_partitions'?: number | undefined;
    private 'max_partitions'?: number | undefined;
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
    public set remainPartitions(remainPartitions: number | undefined) {
        this['remain_partitions'] = remainPartitions;
    }
    public get remainPartitions() {
        return this['remain_partitions'];
    }
    public withMaxPartitions(maxPartitions: number): ListInstanceTopicsResponse {
        this['max_partitions'] = maxPartitions;
        return this;
    }
    public set maxPartitions(maxPartitions: number | undefined) {
        this['max_partitions'] = maxPartitions;
    }
    public get maxPartitions() {
        return this['max_partitions'];
    }
    public withTopics(topics: Array<TopicEntity>): ListInstanceTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}