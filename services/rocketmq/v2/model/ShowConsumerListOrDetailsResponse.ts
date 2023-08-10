import { Brokers } from './Brokers';
import { ConsumerDetailResp } from './ConsumerDetailResp';
import { ConsumerList } from './ConsumerList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsumerListOrDetailsResponse extends SdkResponse {
    public topics?: Array<string>;
    public total?: number;
    public lag?: number;
    private 'max_offset'?: number;
    private 'consumer_offset'?: number;
    public brokers?: Array<Brokers>;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<string>): ShowConsumerListOrDetailsResponse {
        this['topics'] = topics;
        return this;
    }
    public withTotal(total: number): ShowConsumerListOrDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withLag(lag: number): ShowConsumerListOrDetailsResponse {
        this['lag'] = lag;
        return this;
    }
    public withMaxOffset(maxOffset: number): ShowConsumerListOrDetailsResponse {
        this['max_offset'] = maxOffset;
        return this;
    }
    public set maxOffset(maxOffset: number  | undefined) {
        this['max_offset'] = maxOffset;
    }
    public get maxOffset(): number | undefined {
        return this['max_offset'];
    }
    public withConsumerOffset(consumerOffset: number): ShowConsumerListOrDetailsResponse {
        this['consumer_offset'] = consumerOffset;
        return this;
    }
    public set consumerOffset(consumerOffset: number  | undefined) {
        this['consumer_offset'] = consumerOffset;
    }
    public get consumerOffset(): number | undefined {
        return this['consumer_offset'];
    }
    public withBrokers(brokers: Array<Brokers>): ShowConsumerListOrDetailsResponse {
        this['brokers'] = brokers;
        return this;
    }
}