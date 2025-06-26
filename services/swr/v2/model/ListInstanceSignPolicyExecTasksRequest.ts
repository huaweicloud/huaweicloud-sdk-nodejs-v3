

export class ListInstanceSignPolicyExecTasksRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'policy_id'?: number;
    private 'execution_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, namespaceName?: string, policyId?: number, executionId?: number) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['policy_id'] = policyId;
        this['execution_id'] = executionId;
    }
    public withInstanceId(instanceId: string): ListInstanceSignPolicyExecTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ListInstanceSignPolicyExecTasksRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withPolicyId(policyId: number): ListInstanceSignPolicyExecTasksRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withExecutionId(executionId: number): ListInstanceSignPolicyExecTasksRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withOffset(offset: number): ListInstanceSignPolicyExecTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceSignPolicyExecTasksRequest {
        this['limit'] = limit;
        return this;
    }
}