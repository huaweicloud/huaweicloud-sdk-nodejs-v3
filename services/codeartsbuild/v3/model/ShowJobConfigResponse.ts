import { CreateBuildJobRequestBody } from './CreateBuildJobRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobConfigResponse extends SdkResponse {
    public result?: CreateBuildJobRequestBody;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateBuildJobRequestBody): ShowJobConfigResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowJobConfigResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowJobConfigResponse {
        this['status'] = status;
        return this;
    }
}