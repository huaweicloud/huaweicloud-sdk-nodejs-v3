import { Workflow } from './Workflow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public items?: Array<Workflow>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListWorkflowsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<Workflow>): ListWorkflowsResponse {
        this['items'] = items;
        return this;
    }
}