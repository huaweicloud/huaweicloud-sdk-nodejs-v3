import { WorkflowSimpleInfo } from './WorkflowSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public workflows?: Array<WorkflowSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListWorkflowResponse {
        this['size'] = size;
        return this;
    }
    public withWorkflows(workflows: Array<WorkflowSimpleInfo>): ListWorkflowResponse {
        this['workflows'] = workflows;
        return this;
    }
}