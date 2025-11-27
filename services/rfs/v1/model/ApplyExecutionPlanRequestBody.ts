import { ExecutionPlanIdPrimitiveTypeHolder } from './ExecutionPlanIdPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';


export class ApplyExecutionPlanRequestBody {
    private 'execution_plan_id'?: string;
    private 'stack_id'?: string;
    public constructor() { 
    }
    public withExecutionPlanId(executionPlanId: string): ApplyExecutionPlanRequestBody {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string  | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId(): string | undefined {
        return this['execution_plan_id'];
    }
    public withStackId(stackId: string): ApplyExecutionPlanRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
}