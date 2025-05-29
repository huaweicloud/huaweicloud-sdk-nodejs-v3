import { ShowJobBuildTimeResult } from './ShowJobBuildTimeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobBuildTimeResponse extends SdkResponse {
    public result?: ShowJobBuildTimeResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowJobBuildTimeResult): ShowJobBuildTimeResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowJobBuildTimeResponse {
        this['status'] = status;
        return this;
    }
}