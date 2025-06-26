

export class StopInstanceReplicationPolicyExecutionRequest {
    private 'instance_id'?: string;
    private 'execution_id'?: number;
    public constructor(instanceId?: string, executionId?: number) { 
        this['instance_id'] = instanceId;
        this['execution_id'] = executionId;
    }
    public withInstanceId(instanceId: string): StopInstanceReplicationPolicyExecutionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withExecutionId(executionId: number): StopInstanceReplicationPolicyExecutionRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
}