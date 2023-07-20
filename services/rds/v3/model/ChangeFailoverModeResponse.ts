
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeFailoverModeResponse extends SdkResponse {
    public instanceId?: string;
    public replicationMode?: string;
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ChangeFailoverModeResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withReplicationMode(replicationMode: string): ChangeFailoverModeResponse {
        this['replicationMode'] = replicationMode;
        return this;
    }
    public withWorkflowId(workflowId: string): ChangeFailoverModeResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}