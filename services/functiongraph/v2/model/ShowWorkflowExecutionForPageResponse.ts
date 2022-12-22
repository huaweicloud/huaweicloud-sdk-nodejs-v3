import { FlowExecutionBriefV2 } from './FlowExecutionBriefV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowExecutionForPageResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public executions?: Array<FlowExecutionBriefV2>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowWorkflowExecutionForPageResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ShowWorkflowExecutionForPageResponse {
        this['size'] = size;
        return this;
    }
    public withExecutions(executions: Array<FlowExecutionBriefV2>): ShowWorkflowExecutionForPageResponse {
        this['executions'] = executions;
        return this;
    }
}