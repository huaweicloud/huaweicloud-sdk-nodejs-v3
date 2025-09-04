import { JobStatusResultResponseBodyResult } from './JobStatusResultResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildDetailsResponse extends SdkResponse {
    public result?: JobStatusResultResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: JobStatusResultResponseBodyResult): ShowBuildDetailsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowBuildDetailsResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowBuildDetailsResponse {
        this['status'] = status;
        return this;
    }
}