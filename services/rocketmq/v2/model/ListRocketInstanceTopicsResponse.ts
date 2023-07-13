import { Topic } from './Topic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRocketInstanceTopicsResponse extends SdkResponse {
    public total?: number;
    public max?: number;
    public remaining?: number;
    private 'next_offset'?: number | undefined;
    private 'previous_offset'?: number | undefined;
    public topics?: Array<Topic>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRocketInstanceTopicsResponse {
        this['total'] = total;
        return this;
    }
    public withMax(max: number): ListRocketInstanceTopicsResponse {
        this['max'] = max;
        return this;
    }
    public withRemaining(remaining: number): ListRocketInstanceTopicsResponse {
        this['remaining'] = remaining;
        return this;
    }
    public withNextOffset(nextOffset: number): ListRocketInstanceTopicsResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset() {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ListRocketInstanceTopicsResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset() {
        return this['previous_offset'];
    }
    public withTopics(topics: Array<Topic>): ListRocketInstanceTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}