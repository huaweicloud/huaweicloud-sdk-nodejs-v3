

export class ExecutionPlan {
    private 'stack_id'?: string | undefined;
    private 'stack_name'?: string | undefined;
    private 'execution_plan_id'?: string | undefined;
    private 'execution_plan_name'?: string | undefined;
    public description?: string;
    private 'create_time'?: string | undefined;
    private 'apply_time'?: string | undefined;
    public status?: ExecutionPlanStatusEnum;
    private 'status_message'?: string | undefined;
    public constructor() { 
    }
    public withStackId(stackId: string): ExecutionPlan {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withStackName(stackName: string): ExecutionPlan {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withExecutionPlanId(executionPlanId: string): ExecutionPlan {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId() {
        return this['execution_plan_id'];
    }
    public withExecutionPlanName(executionPlanName: string): ExecutionPlan {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName() {
        return this['execution_plan_name'];
    }
    public withDescription(description: string): ExecutionPlan {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ExecutionPlan {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withApplyTime(applyTime: string): ExecutionPlan {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime() {
        return this['apply_time'];
    }
    public withStatus(status: ExecutionPlanStatusEnum): ExecutionPlan {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ExecutionPlan {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage() {
        return this['status_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecutionPlanStatusEnum {
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED',
    AVAILABLE = 'AVAILABLE',
    APPLIED = 'APPLIED'
}
