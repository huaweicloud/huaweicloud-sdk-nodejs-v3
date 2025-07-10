import { Key } from './Key';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeployKeyV2Response extends SdkResponse {
    public error?: Error;
    public result?: Key;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddDeployKeyV2Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: Key): AddDeployKeyV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddDeployKeyV2Response {
        this['status'] = status;
        return this;
    }
}