import { DeleteConsumerGroupOffsetsResponseEntity } from './DeleteConsumerGroupOffsetsResponseEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteConsumerGroupOffsetsResponse extends SdkResponse {
    public topics?: Array<DeleteConsumerGroupOffsetsResponseEntity>;
    public constructor() { 
        super();
    }
    public withTopics(topics: Array<DeleteConsumerGroupOffsetsResponseEntity>): DeleteConsumerGroupOffsetsResponse {
        this['topics'] = topics;
        return this;
    }
}