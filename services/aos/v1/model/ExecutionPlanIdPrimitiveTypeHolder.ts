

export class ExecutionPlanIdPrimitiveTypeHolder {
    private 'execution_plan_id'?: string | undefined;
    public constructor() { 
    }
    public withExecutionPlanId(executionPlanId: string): ExecutionPlanIdPrimitiveTypeHolder {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId() {
        return this['execution_plan_id'];
    }
}