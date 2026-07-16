import { WorkflowStepMetric } from './WorkflowStepMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowStepExecutionMetricsResponse extends SdkResponse {
    public body?: Array<WorkflowStepMetric>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WorkflowStepMetric>): ShowWorkflowStepExecutionMetricsResponse {
        this['body'] = body;
        return this;
    }
}