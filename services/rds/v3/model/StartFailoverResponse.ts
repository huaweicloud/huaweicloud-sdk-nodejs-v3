
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartFailoverResponse extends SdkResponse {
    public instanceId?: string;
    public nodeId?: string;
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): StartFailoverResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withNodeId(nodeId: string): StartFailoverResponse {
        this['nodeId'] = nodeId;
        return this;
    }
    public withWorkflowId(workflowId: string): StartFailoverResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}