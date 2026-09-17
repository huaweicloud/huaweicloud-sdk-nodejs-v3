import { PipelineTagResp } from './PipelineTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineTagResponse extends SdkResponse {
    public body?: Array<PipelineTagResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PipelineTagResp>): ListPipelineTagResponse {
        this['body'] = body;
        return this;
    }
}