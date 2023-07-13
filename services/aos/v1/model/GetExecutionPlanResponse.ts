import { ExecutionPlanItem } from './ExecutionPlanItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetExecutionPlanResponse extends SdkResponse {
    private 'execution_plan_items'?: Array<ExecutionPlanItem> | undefined;
    public constructor() { 
        super();
    }
    public withExecutionPlanItems(executionPlanItems: Array<ExecutionPlanItem>): GetExecutionPlanResponse {
        this['execution_plan_items'] = executionPlanItems;
        return this;
    }
    public set executionPlanItems(executionPlanItems: Array<ExecutionPlanItem> | undefined) {
        this['execution_plan_items'] = executionPlanItems;
    }
    public get executionPlanItems() {
        return this['execution_plan_items'];
    }
}