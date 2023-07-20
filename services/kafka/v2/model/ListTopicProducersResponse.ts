import { KafkaTopicProducerResponseProducers } from './KafkaTopicProducerResponseProducers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicProducersResponse extends SdkResponse {
    public total?: number;
    public producers?: Array<KafkaTopicProducerResponseProducers>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopicProducersResponse {
        this['total'] = total;
        return this;
    }
    public withProducers(producers: Array<KafkaTopicProducerResponseProducers>): ListTopicProducersResponse {
        this['producers'] = producers;
        return this;
    }
}