import { ApproveResult } from './ApproveResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchApproveSecurityApplicationsResponse extends SdkResponse {
    public body?: Array<ApproveResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApproveResult>): BatchApproveSecurityApplicationsResponse {
        this['body'] = body;
        return this;
    }
}