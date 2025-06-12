import { JobSummaryBodyResult } from './JobSummaryBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSummaryBuildJobInfoResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: JobSummaryBodyResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowSummaryBuildJobInfoResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowSummaryBuildJobInfoResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: JobSummaryBodyResult): ShowSummaryBuildJobInfoResponse {
        this['result'] = result;
        return this;
    }
}