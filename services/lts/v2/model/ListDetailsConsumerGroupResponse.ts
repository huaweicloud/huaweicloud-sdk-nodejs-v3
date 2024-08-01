import { ConsumerCheckpointInfo } from './ConsumerCheckpointInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDetailsConsumerGroupResponse extends SdkResponse {
    public body?: Array<ConsumerCheckpointInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConsumerCheckpointInfo>): ListDetailsConsumerGroupResponse {
        this['body'] = body;
        return this;
    }
}