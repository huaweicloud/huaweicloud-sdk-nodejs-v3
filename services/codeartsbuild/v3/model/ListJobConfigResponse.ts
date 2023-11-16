import { CreateBuildJobRequestBody } from './CreateBuildJobRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobConfigResponse extends SdkResponse {
    public result?: Array<CreateBuildJobRequestBody>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CreateBuildJobRequestBody>): ListJobConfigResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListJobConfigResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListJobConfigResponse {
        this['status'] = status;
        return this;
    }
}