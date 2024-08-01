import { ConsumerGroupInfo } from './ConsumerGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConsumerGroupResponse extends SdkResponse {
    public body?: Array<ConsumerGroupInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConsumerGroupInfo>): ListConsumerGroupResponse {
        this['body'] = body;
        return this;
    }
}