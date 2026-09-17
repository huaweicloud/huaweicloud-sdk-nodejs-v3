import { BatchResultVOIssueWithReasonVO } from './BatchResultVOIssueWithReasonVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchTransferIpdWorkItemFlowResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: BatchResultVOIssueWithReasonVO;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchTransferIpdWorkItemFlowResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchTransferIpdWorkItemFlowResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: BatchResultVOIssueWithReasonVO): BatchTransferIpdWorkItemFlowResponse {
        this['result'] = result;
        return this;
    }
}