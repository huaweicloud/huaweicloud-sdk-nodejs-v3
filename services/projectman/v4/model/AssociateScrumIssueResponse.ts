import { AssociateIssueDetail } from './AssociateIssueDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateScrumIssueResponse extends SdkResponse {
    public result?: Array<AssociateIssueDetail>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AssociateIssueDetail>): AssociateScrumIssueResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AssociateScrumIssueResponse {
        this['status'] = status;
        return this;
    }
}