
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExecutionPlanResponse extends SdkResponse {
    private 'stack_name'?: string | undefined;
    private 'stack_id'?: string | undefined;
    private 'execution_plan_name'?: string | undefined;
    private 'execution_plan_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withStackName(stackName: string): CreateExecutionPlanResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withStackId(stackId: string): CreateExecutionPlanResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withExecutionPlanName(executionPlanName: string): CreateExecutionPlanResponse {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName() {
        return this['execution_plan_name'];
    }
    public withExecutionPlanId(executionPlanId: string): CreateExecutionPlanResponse {
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