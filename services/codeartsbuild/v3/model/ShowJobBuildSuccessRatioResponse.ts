import { ShowJobBuildSuccessRatioResult } from './ShowJobBuildSuccessRatioResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobBuildSuccessRatioResponse extends SdkResponse {
    public result?: ShowJobBuildSuccessRatioResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowJobBuildSuccessRatioResult): ShowJobBuildSuccessRatioResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowJobBuildSuccessRatioResponse {
        this['status'] = status;
        return this;
    }
}