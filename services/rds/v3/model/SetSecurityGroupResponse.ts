
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSecurityGroupResponse extends SdkResponse {
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): SetSecurityGroupResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}