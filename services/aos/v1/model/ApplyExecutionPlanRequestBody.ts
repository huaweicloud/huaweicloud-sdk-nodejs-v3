import { ExecutionPlanIdPrimitiveTypeHolder } from './ExecutionPlanIdPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';


export class ApplyExecutionPlanRequestBody {
    private 'execution_plan_id'?: string | undefined;
    private 'stack_id'?: string | undefined;
    public constructor() { 
    }
    public withExecutionPlanId(executionPlanId: string): ApplyExecutionPlanRequestBody {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId() {
        return this['execution_plan_id'];
    }
    public withStackId(stackId: string): ApplyExecutionPlanRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
}