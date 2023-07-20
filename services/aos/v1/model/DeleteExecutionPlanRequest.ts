

export class DeleteExecutionPlanRequest {
    private 'Client-Request-Id'?: string;
    private 'project_id'?: string;
    private 'stack_name'?: string;
    private 'execution_plan_name'?: string;
    private 'stack_id'?: string;
    private 'execution_plan_id'?: string;
    public constructor(clientRequestId?: string, projectId?: string, stackName?: string, executionPlanName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['project_id'] = projectId;
        this['stack_name'] = stackName;
        this['execution_plan_name'] = executionPlanName;
    }
    public withClientRequestId(clientRequestId: string): DeleteExecutionPlanRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProjectId(projectId: string): DeleteExecutionPlanRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStackName(stackName: string): DeleteExecutionPlanRequest {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withExecutionPlanName(executionPlanName: string): DeleteExecutionPlanRequest {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string  | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName(): string | undefined {
        return this['execution_plan_name'];
    }
    public withStackId(stackId: string): DeleteExecutionPlanRequest {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withExecutionPlanId(executionPlanId: string): DeleteExecutionPlanRequest {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string  | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId(): string | undefined {
        return this['execution_plan_id'];
    }
}