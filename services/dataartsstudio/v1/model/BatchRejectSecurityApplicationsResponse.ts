import { ApproveResult } from './ApproveResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRejectSecurityApplicationsResponse extends SdkResponse {
    public body?: Array<ApproveResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApproveResult>): BatchRejectSecurityApplicationsResponse {
        this['body'] = body;
        return this;
    }
}