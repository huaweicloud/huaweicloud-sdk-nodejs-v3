import { BuildParamsBodyResult } from './BuildParamsBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildParamsListResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: BuildParamsBodyResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowBuildParamsListResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowBuildParamsListResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: BuildParamsBodyResult): ShowBuildParamsListResponse {
        this['result'] = result;
        return this;
    }
}