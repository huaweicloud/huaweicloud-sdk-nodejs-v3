import { CreateBuildJobResponseBodyResult } from './CreateBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBuildJobResponse extends SdkResponse {
    public result?: CreateBuildJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobResponseBodyResult): CreateBuildJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateBuildJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): CreateBuildJobResponse {
        this['error'] = error;
        return this;
    }
}