import { ExecutionPlanDescriptionPrimitiveTypeHolder } from './ExecutionPlanDescriptionPrimitiveTypeHolder';
import { ExecutionPlanIdPrimitiveTypeHolder } from './ExecutionPlanIdPrimitiveTypeHolder';
import { ExecutionPlanNamePrimitiveTypeHolder } from './ExecutionPlanNamePrimitiveTypeHolder';
import { ExecutionPlanStatusMessagePrimitiveTypeHolder } from './ExecutionPlanStatusMessagePrimitiveTypeHolder';
import { ExecutionPlanStatusPrimitiveTypeHolder } from './ExecutionPlanStatusPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';


export class ExecutionPlan {
    private 'stack_name'?: string;
    private 'stack_id'?: string;
    private 'execution_plan_id'?: string;
    private 'execution_plan_name'?: string;
    public description?: string;
    public status?: ExecutionPlanStatusEnum | string;
    private 'status_message'?: string;
    private 'create_time'?: string;
    private 'apply_time'?: string;
    public constructor(stackName?: string, executionPlanName?: string) { 
        this['stack_name'] = stackName;
        this['execution_plan_name'] = executionPlanName;
    }
    public withStackName(stackName: string): ExecutionPlan {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ExecutionPlan {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withExecutionPlanId(executionPlanId: string): ExecutionPlan {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string  | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId(): string | undefined {
        return this['execution_plan_id'];
    }
    public withExecutionPlanName(executionPlanName: string): ExecutionPlan {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string  | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName(): string | undefined {
        return this['execution_plan_name'];
    }
    public withDescription(description: string): ExecutionPlan {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ExecutionPlanStatusEnum | string): ExecutionPlan {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ExecutionPlan {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withCreateTime(createTime: string): ExecutionPlan {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withApplyTime(applyTime: string): ExecutionPlan {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): string | undefined {
        return this['apply_time'];
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
    APPLY_IN_PROGRESS = 'APPLY_IN_PROGRESS',
    APPLIED = 'APPLIED'
}
