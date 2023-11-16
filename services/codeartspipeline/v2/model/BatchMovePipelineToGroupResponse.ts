import { PipelineMoveToGroupResponseVo } from './PipelineMoveToGroupResponseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchMovePipelineToGroupResponse extends SdkResponse {
    public body?: Array<PipelineMoveToGroupResponseVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PipelineMoveToGroupResponseVo>): BatchMovePipelineToGroupResponse {
        this['body'] = body;
        return this;
    }
}