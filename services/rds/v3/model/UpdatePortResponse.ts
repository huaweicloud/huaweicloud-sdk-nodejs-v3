
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePortResponse extends SdkResponse {
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): UpdatePortResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}