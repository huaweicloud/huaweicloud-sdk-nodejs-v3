import { SetKeepTimeResult } from './SetKeepTimeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetKeepTimeResponse extends SdkResponse {
    public result?: SetKeepTimeResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: SetKeepTimeResult): SetKeepTimeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): SetKeepTimeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): SetKeepTimeResponse {
        this['status'] = status;
        return this;
    }
}