
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRebuildSlaveResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'workflow_id'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): CreateRebuildSlaveResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkflowId(workflowId: string): CreateRebuildSlaveResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
}