
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataIpResponse extends SdkResponse {
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): UpdateDataIpResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}