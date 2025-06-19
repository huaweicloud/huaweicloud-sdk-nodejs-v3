import { CreateBuildJobResponseBodyResult } from './CreateBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyJobResponse extends SdkResponse {
    public result?: CreateBuildJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobResponseBodyResult): CopyJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CopyJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): CopyJobResponse {
        this['error'] = error;
        return this;
    }
}