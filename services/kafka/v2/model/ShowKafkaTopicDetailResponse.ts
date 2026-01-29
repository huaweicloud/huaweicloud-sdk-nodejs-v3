import { KafkaTopicDetailEntity } from './KafkaTopicDetailEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicDetailResponse extends SdkResponse {
    public body?: Array<KafkaTopicDetailEntity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<KafkaTopicDetailEntity>): ShowKafkaTopicDetailResponse {
        this['body'] = body;
        return this;
    }
}