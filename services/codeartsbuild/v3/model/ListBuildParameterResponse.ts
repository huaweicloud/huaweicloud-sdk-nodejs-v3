import { BuildParameter } from './BuildParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBuildParameterResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: Array<BuildParameter>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListBuildParameterResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ListBuildParameterResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: Array<BuildParameter>): ListBuildParameterResponse {
        this['result'] = result;
        return this;
    }
}