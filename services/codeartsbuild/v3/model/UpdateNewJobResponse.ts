import { CreateBuildJobResponseBodyResult } from './CreateBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNewJobResponse extends SdkResponse {
    public result?: CreateBuildJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobResponseBodyResult): UpdateNewJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateNewJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): UpdateNewJobResponse {
        this['error'] = error;
        return this;
    }
}