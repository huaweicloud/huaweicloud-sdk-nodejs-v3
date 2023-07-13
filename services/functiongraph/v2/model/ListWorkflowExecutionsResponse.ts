import { FlowExecutionBrief } from './FlowExecutionBrief';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowExecutionsResponse extends SdkResponse {
    public executions?: Array<FlowExecutionBrief>;
    public constructor() { 
        super();
    }
    public withExecutions(executions: Array<FlowExecutionBrief>): ListWorkflowExecutionsResponse {
        this['executions'] = executions;
        return this;
    }
}