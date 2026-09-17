import { UpdateIssueFlowsResponseResult } from './UpdateIssueFlowsResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateScrumIssueWorkflowResponse extends SdkResponse {
    public result?: UpdateIssueFlowsResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: UpdateIssueFlowsResponseResult): UpdateScrumIssueWorkflowResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateScrumIssueWorkflowResponse {
        this['status'] = status;
        return this;
    }
}