

export class ExecutionPlanIdPrimitiveTypeHolder {
    private 'execution_plan_id'?: string;
    public constructor() { 
    }
    public withExecutionPlanId(executionPlanId: string): ExecutionPlanIdPrimitiveTypeHolder {
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