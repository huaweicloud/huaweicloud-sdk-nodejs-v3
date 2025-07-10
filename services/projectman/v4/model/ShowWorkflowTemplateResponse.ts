import { WorkflowTemplateVO } from './WorkflowTemplateVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowTemplateResponse extends SdkResponse {
    public result?: WorkflowTemplateVO;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: WorkflowTemplateVO): ShowWorkflowTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowWorkflowTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowWorkflowTemplateResponse {
        this['message'] = message;
        return this;
    }
}