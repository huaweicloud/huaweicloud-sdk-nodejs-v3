import { ExecutionPlan } from './ExecutionPlan';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExecutionPlansResponse extends SdkResponse {
    private 'execution_plans'?: Array<ExecutionPlan>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withExecutionPlans(executionPlans: Array<ExecutionPlan>): ListExecutionPlansResponse {
        this['execution_plans'] = executionPlans;
        return this;
    }
    public set executionPlans(executionPlans: Array<ExecutionPlan>  | undefined) {
        this['execution_plans'] = executionPlans;
    }
    public get executionPlans(): Array<ExecutionPlan> | undefined {
        return this['execution_plans'];
    }
    public withPageInfo(pageInfo: PageInfo): ListExecutionPlansResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}