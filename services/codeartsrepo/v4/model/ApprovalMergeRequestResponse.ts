import { ApproverBasicDto } from './ApproverBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApprovalMergeRequestResponse extends SdkResponse {
    public body?: Array<ApproverBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApproverBasicDto>): ApprovalMergeRequestResponse {
        this['body'] = body;
        return this;
    }
}