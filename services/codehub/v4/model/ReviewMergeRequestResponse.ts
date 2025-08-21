import { ApproverBasicDto } from './ApproverBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ReviewMergeRequestResponse extends SdkResponse {
    public body?: Array<ApproverBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApproverBasicDto>): ReviewMergeRequestResponse {
        this['body'] = body;
        return this;
    }
}