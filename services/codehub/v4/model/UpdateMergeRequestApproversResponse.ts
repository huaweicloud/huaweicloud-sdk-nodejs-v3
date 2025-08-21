import { ApproverBasicDto } from './ApproverBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMergeRequestApproversResponse extends SdkResponse {
    public body?: Array<ApproverBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApproverBasicDto>): UpdateMergeRequestApproversResponse {
        this['body'] = body;
        return this;
    }
}