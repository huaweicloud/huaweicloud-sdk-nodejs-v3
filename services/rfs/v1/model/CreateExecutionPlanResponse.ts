import { ExecutionPlanIdPrimitiveTypeHolder } from './ExecutionPlanIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExecutionPlanResponse extends SdkResponse {
    private 'execution_plan_id'?: string;
    public constructor() { 
        super();
    }
    public withExecutionPlanId(executionPlanId: string): CreateExecutionPlanResponse {
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