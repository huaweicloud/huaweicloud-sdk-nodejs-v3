import { WorkflowApproveOpinionDetail } from './WorkflowApproveOpinionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAopWorkflowVersionApprovelResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: WorkflowApproveOpinionDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateAopWorkflowVersionApprovelResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateAopWorkflowVersionApprovelResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: WorkflowApproveOpinionDetail): CreateAopWorkflowVersionApprovelResponse {
        this['data'] = data;
        return this;
    }
}