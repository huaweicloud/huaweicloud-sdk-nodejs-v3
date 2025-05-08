import { ListBrokersRespBrokers } from './ListBrokersRespBrokers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBrokersResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public brokers?: Array<ListBrokersRespBrokers>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBrokersResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ListBrokersResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ListBrokersResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withBrokers(brokers: Array<ListBrokersRespBrokers>): ListBrokersResponse {
        this['brokers'] = brokers;
        return this;
    }
}