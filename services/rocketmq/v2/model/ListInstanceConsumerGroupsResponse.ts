import { ConsumerGroup } from './ConsumerGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupsResponse extends SdkResponse {
    public total?: number;
    public groups?: Array<ConsumerGroup>;
    public max?: number;
    public remaining?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceConsumerGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withGroups(groups: Array<ConsumerGroup>): ListInstanceConsumerGroupsResponse {
        this['groups'] = groups;
        return this;
    }
    public withMax(max: number): ListInstanceConsumerGroupsResponse {
        this['max'] = max;
        return this;
    }
    public withRemaining(remaining: number): ListInstanceConsumerGroupsResponse {
        this['remaining'] = remaining;
        return this;
    }
    public withNextOffset(nextOffset: number): ListInstanceConsumerGroupsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ListInstanceConsumerGroupsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
}