import { ShowTopicStatusRespBrokers } from './ShowTopicStatusRespBrokers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopicStatusResponse extends SdkResponse {
    public brokers?: Array<ShowTopicStatusRespBrokers>;
    public constructor() { 
        super();
    }
    public withBrokers(brokers: Array<ShowTopicStatusRespBrokers>): ShowTopicStatusResponse {
        this['brokers'] = brokers;
        return this;
    }
}