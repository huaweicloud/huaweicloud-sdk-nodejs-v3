import { WorkflowExecutionResp } from './WorkflowExecutionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowExecutionsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public items?: Array<WorkflowExecutionResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowExecutionsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListWorkflowExecutionsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<WorkflowExecutionResp>): ListWorkflowExecutionsResponse {
        this['items'] = items;
        return this;
    }
}