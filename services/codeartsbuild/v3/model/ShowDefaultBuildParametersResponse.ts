import { ShowDefaultBuildParametersResult } from './ShowDefaultBuildParametersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultBuildParametersResponse extends SdkResponse {
    public result?: Array<ShowDefaultBuildParametersResult>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ShowDefaultBuildParametersResult>): ShowDefaultBuildParametersResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowDefaultBuildParametersResponse {
        this['status'] = status;
        return this;
    }
}