import { ListBrokersRespBrokers } from './ListBrokersRespBrokers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBrokersResponse extends SdkResponse {
    public brokers?: Array<ListBrokersRespBrokers>;
    public constructor() { 
        super();
    }
    public withBrokers(brokers: Array<ListBrokersRespBrokers>): ListBrokersResponse {
        this['brokers'] = brokers;
        return this;
    }
}