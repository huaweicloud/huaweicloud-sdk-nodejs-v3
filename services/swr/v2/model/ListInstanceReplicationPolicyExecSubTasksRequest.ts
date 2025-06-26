

export class ListInstanceReplicationPolicyExecSubTasksRequest {
    private 'instance_id'?: string;
    private 'execution_id'?: number;
    private 'task_id'?: number;
    public offset?: number;
    public limit?: number;
    public status?: string;
    public constructor(instanceId?: string, executionId?: number, taskId?: number) { 
        this['instance_id'] = instanceId;
        this['execution_id'] = executionId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withExecutionId(executionId: number): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withTaskId(taskId: number): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListInstanceReplicationPolicyExecSubTasksRequest {
        this['status'] = status;
        return this;
    }
}