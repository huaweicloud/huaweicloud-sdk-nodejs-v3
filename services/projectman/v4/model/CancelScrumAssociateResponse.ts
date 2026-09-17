import { CancelAssociateIssueResponseResult } from './CancelAssociateIssueResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelScrumAssociateResponse extends SdkResponse {
    public result?: CancelAssociateIssueResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CancelAssociateIssueResponseResult): CancelScrumAssociateResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CancelScrumAssociateResponse {
        this['status'] = status;
        return this;
    }
}