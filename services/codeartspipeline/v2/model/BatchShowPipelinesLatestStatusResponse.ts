import { PipelineLatestRun } from './PipelineLatestRun';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowPipelinesLatestStatusResponse extends SdkResponse {
    public body?: Array<PipelineLatestRun>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PipelineLatestRun>): BatchShowPipelinesLatestStatusResponse {
        this['body'] = body;
        return this;
    }
}