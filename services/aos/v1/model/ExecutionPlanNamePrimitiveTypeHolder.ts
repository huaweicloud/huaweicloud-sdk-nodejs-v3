

export class ExecutionPlanNamePrimitiveTypeHolder {
    private 'execution_plan_name': string | undefined;
    public constructor(executionPlanName?: any) { 
        this['execution_plan_name'] = executionPlanName;
    }
    public withExecutionPlanName(executionPlanName: string): ExecutionPlanNamePrimitiveTypeHolder {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName() {
        return this['execution_plan_name'];
    }
}