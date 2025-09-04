import { DeleteTheJobResponseBodyResult } from './DeleteTheJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteBuildJobsResponse extends SdkResponse {
    public result?: DeleteTheJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteTheJobResponseBodyResult): BatchDeleteBuildJobsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchDeleteBuildJobsResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): BatchDeleteBuildJobsResponse {
        this['error'] = error;
        return this;
    }
}