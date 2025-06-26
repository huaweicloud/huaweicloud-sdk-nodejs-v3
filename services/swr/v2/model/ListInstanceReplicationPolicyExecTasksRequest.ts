

export class ListInstanceReplicationPolicyExecTasksRequest {
    private 'instance_id'?: string;
    private 'execution_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, executionId?: number) { 
        this['instance_id'] = instanceId;
        this['execution_id'] = executionId;
    }
    public withInstanceId(instanceId: string): ListInstanceReplicationPolicyExecTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withExecutionId(executionId: number): ListInstanceReplicationPolicyExecTasksRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withOffset(offset: number): ListInstanceReplicationPolicyExecTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceReplicationPolicyExecTasksRequest {
        this['limit'] = limit;
        return this;
    }
}