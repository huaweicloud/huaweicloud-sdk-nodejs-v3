

export class ExecutionPlanNamePrimitiveTypeHolder {
    private 'execution_plan_name'?: string;
    public constructor(executionPlanName?: string) { 
        this['execution_plan_name'] = executionPlanName;
    }
    public withExecutionPlanName(executionPlanName: string): ExecutionPlanNamePrimitiveTypeHolder {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string  | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName(): string | undefined {
        return this['execution_plan_name'];
    }
}