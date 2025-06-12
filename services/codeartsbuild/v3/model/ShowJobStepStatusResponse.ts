import { JobStatusBody } from './JobStatusBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobStepStatusResponse extends SdkResponse {
    public result?: JobStatusBody;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: JobStatusBody): ShowJobStepStatusResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowJobStepStatusResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowJobStepStatusResponse {
        this['status'] = status;
        return this;
    }
}