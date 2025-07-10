import { Key } from './Key';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeployKeyResponse extends SdkResponse {
    public error?: Error;
    public result?: Key;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddDeployKeyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Key): AddDeployKeyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddDeployKeyResponse {
        this['status'] = status;
        return this;
    }
}