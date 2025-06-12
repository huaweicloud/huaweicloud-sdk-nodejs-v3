import { IsDisableResult } from './IsDisableResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisableResponse extends SdkResponse {
    public result?: IsDisableResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: IsDisableResult): ShowDisableResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowDisableResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowDisableResponse {
        this['status'] = status;
        return this;
    }
}