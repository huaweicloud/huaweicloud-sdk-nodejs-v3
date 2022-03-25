import { ListWorkflowExecutionResult } from './ListWorkflowExecutionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowExecutionsResponse extends SdkResponse {
    public executions?: Array<ListWorkflowExecutionResult>;
    public constructor() { 
        super();
    }
    public withExecutions(executions: Array<ListWorkflowExecutionResult>): ListWorkflowExecutionsResponse {
        this['executions'] = executions;
        return this;
    }
}