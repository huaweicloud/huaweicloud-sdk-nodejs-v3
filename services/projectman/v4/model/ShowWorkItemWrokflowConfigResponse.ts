import { WorkItemStatusFlowVo } from './WorkItemStatusFlowVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkItemWrokflowConfigResponse extends SdkResponse {
    public workflows?: Array<WorkItemStatusFlowVo>;
    public constructor() { 
        super();
    }
    public withWorkflows(workflows: Array<WorkItemStatusFlowVo>): ShowWorkItemWrokflowConfigResponse {
        this['workflows'] = workflows;
        return this;
    }
}