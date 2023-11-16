import { PipelineGroupVo } from './PipelineGroupVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineGroupTreeResponse extends SdkResponse {
    public body?: Array<PipelineGroupVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PipelineGroupVo>): ShowPipelineGroupTreeResponse {
        this['body'] = body;
        return this;
    }
}