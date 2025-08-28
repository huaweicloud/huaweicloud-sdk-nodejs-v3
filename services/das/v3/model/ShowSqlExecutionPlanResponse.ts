import { ExecutionPlan } from './ExecutionPlan';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlExecutionPlanResponse extends SdkResponse {
    private 'execution_plans'?: Array<ExecutionPlan>;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withExecutionPlans(executionPlans: Array<ExecutionPlan>): ShowSqlExecutionPlanResponse {
        this['execution_plans'] = executionPlans;
        return this;
    }
    public set executionPlans(executionPlans: Array<ExecutionPlan>  | undefined) {
        this['execution_plans'] = executionPlans;
    }
    public get executionPlans(): Array<ExecutionPlan> | undefined {
        return this['execution_plans'];
    }
    public withErrorMessage(errorMessage: string): ShowSqlExecutionPlanResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}