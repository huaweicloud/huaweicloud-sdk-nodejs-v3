import { OutPutInfoResult } from './OutPutInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOutputInfoResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: OutPutInfoResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowOutputInfoResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowOutputInfoResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: OutPutInfoResult): ShowOutputInfoResponse {
        this['result'] = result;
        return this;
    }
}