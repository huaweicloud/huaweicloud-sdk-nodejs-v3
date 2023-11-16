import { CreateBuildJobResponseBodyResult } from './CreateBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBuildJobResponse extends SdkResponse {
    public result?: CreateBuildJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobResponseBodyResult): UpdateBuildJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateBuildJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): UpdateBuildJobResponse {
        this['error'] = error;
        return this;
    }
}