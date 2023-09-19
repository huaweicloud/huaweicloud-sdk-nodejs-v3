import { Result } from './Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartConnectivityTestResponse extends SdkResponse {
    public result?: Array<Result>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<Result>): StartConnectivityTestResponse {
        this['result'] = result;
        return this;
    }
}