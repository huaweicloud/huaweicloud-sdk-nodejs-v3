import { ShowPartitionMessageEntity } from './ShowPartitionMessageEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartitionMessageResponse extends SdkResponse {
    public message?: Array<ShowPartitionMessageEntity>;
    public constructor() { 
        super();
    }
    public withMessage(message: Array<ShowPartitionMessageEntity>): ShowPartitionMessageResponse {
        this['message'] = message;
        return this;
    }
}