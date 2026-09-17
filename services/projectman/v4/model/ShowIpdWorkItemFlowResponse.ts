import { WorkItemFlowInfoVO } from './WorkItemFlowInfoVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdWorkItemFlowResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: WorkItemFlowInfoVO;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdWorkItemFlowResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdWorkItemFlowResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: WorkItemFlowInfoVO): ShowIpdWorkItemFlowResponse {
        this['result'] = result;
        return this;
    }
}