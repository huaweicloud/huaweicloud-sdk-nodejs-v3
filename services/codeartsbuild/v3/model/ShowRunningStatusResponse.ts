import { ShowRunningStatusResult } from './ShowRunningStatusResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRunningStatusResponse extends SdkResponse {
    public result?: ShowRunningStatusResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowRunningStatusResult): ShowRunningStatusResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowRunningStatusResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowRunningStatusResponse {
        this['status'] = status;
        return this;
    }
}