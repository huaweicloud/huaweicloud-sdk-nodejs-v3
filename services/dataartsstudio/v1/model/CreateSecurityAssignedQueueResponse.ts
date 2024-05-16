import { QueueSrcAssignEntity } from './QueueSrcAssignEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityAssignedQueueResponse extends SdkResponse {
    public body?: Array<QueueSrcAssignEntity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<QueueSrcAssignEntity>): CreateSecurityAssignedQueueResponse {
        this['body'] = body;
        return this;
    }
}