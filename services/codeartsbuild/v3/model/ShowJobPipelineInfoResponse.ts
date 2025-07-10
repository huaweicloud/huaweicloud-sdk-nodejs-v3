import { JobPipelineInfoItems } from './JobPipelineInfoItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobPipelineInfoResponse extends SdkResponse {
    public result?: JobPipelineInfoItems;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: JobPipelineInfoItems): ShowJobPipelineInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowJobPipelineInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowJobPipelineInfoResponse {
        this['status'] = status;
        return this;
    }
}