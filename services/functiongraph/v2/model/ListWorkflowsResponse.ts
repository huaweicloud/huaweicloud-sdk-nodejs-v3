import { ListWorkflowsResult } from './ListWorkflowsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public workflows?: Array<ListWorkflowsResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListWorkflowsResponse {
        this['size'] = size;
        return this;
    }
    public withWorkflows(workflows: Array<ListWorkflowsResult>): ListWorkflowsResponse {
        this['workflows'] = workflows;
        return this;
    }
}