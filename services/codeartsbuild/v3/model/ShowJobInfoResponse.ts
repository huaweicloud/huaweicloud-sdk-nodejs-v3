import { ShowJobInfoResult } from './ShowJobInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobInfoResponse extends SdkResponse {
    public result?: ShowJobInfoResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowJobInfoResult): ShowJobInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowJobInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowJobInfoResponse {
        this['status'] = status;
        return this;
    }
}