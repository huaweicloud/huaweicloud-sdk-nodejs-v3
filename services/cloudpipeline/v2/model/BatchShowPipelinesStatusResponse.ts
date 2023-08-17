import { PipelineExecuteStates } from './PipelineExecuteStates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowPipelinesStatusResponse extends SdkResponse {
    public body?: Array<PipelineExecuteStates>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PipelineExecuteStates>): BatchShowPipelinesStatusResponse {
        this['body'] = body;
        return this;
    }
}