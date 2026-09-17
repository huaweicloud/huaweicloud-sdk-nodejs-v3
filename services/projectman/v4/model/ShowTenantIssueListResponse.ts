import { IssueDetailsResponse } from './IssueDetailsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantIssueListResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<IssueDetailsResponse>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowTenantIssueListResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowTenantIssueListResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<IssueDetailsResponse>): ShowTenantIssueListResponse {
        this['result'] = result;
        return this;
    }
}