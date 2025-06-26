import { CreateBuildJobResponseBodyResult } from './CreateBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNewJobResponse extends SdkResponse {
    public result?: CreateBuildJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobResponseBodyResult): CreateNewJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateNewJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): CreateNewJobResponse {
        this['error'] = error;
        return this;
    }
}