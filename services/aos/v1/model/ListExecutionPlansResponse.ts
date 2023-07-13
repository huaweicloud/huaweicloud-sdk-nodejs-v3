import { ExecutionPlan } from './ExecutionPlan';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExecutionPlansResponse extends SdkResponse {
    private 'execution_plans'?: Array<ExecutionPlan> | undefined;
    public constructor() { 
        super();
    }
    public withExecutionPlans(executionPlans: Array<ExecutionPlan>): ListExecutionPlansResponse {
        this['execution_plans'] = executionPlans;
        return this;
    }
    public set executionPlans(executionPlans: Array<ExecutionPlan> | undefined) {
        this['execution_plans'] = executionPlans;
    }
    public get executionPlans() {
        return this['execution_plans'];
    }
}