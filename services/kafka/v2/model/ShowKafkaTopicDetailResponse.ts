import { ShowKafkaTopicDetailResponseBody } from './ShowKafkaTopicDetailResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaTopicDetailResponse extends SdkResponse {
    public body?: Array<ShowKafkaTopicDetailResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowKafkaTopicDetailResponseBody>): ShowKafkaTopicDetailResponse {
        this['body'] = body;
        return this;
    }
}