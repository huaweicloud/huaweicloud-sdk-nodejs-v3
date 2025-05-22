import { ScrumStatusFlowVo } from './ScrumStatusFlowVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssuesWrokFlowConfigResponse extends SdkResponse {
    public workflows?: Array<ScrumStatusFlowVo>;
    public constructor() { 
        super();
    }
    public withWorkflows(workflows: Array<ScrumStatusFlowVo>): ShowIssuesWrokFlowConfigResponse {
        this['workflows'] = workflows;
        return this;
    }
}