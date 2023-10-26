import { WorkflowExecutionBrief } from './WorkflowExecutionBrief';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowExecutionsResponse extends SdkResponse {
    public body?: Array<WorkflowExecutionBrief>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WorkflowExecutionBrief>): ListWorkflowExecutionsResponse {
        this['body'] = body;
        return this;
    }
}