import { Brokers } from './Brokers';
import { ConsumerDetailResp } from './ConsumerDetailResp';
import { ConsumerList } from './ConsumerList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsumerListOrDetailsResponse extends SdkResponse {
    public topics?: Array<string>;
    public total?: number;
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
    public withBrokers(brokers: Array<Brokers>): ShowConsumerListOrDetailsResponse {
        this['brokers'] = brokers;
        return this;
    }
}