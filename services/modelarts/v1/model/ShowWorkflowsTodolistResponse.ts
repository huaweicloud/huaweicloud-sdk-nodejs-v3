import { WorkflowTodo } from './WorkflowTodo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowsTodolistResponse extends SdkResponse {
    public items?: Array<WorkflowTodo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<WorkflowTodo>): ShowWorkflowsTodolistResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ShowWorkflowsTodolistResponse {
        this['total'] = total;
        return this;
    }
}