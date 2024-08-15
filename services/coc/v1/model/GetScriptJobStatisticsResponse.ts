import { JobScriptOrderStatisticsModel } from './JobScriptOrderStatisticsModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetScriptJobStatisticsResponse extends SdkResponse {
    public data?: JobScriptOrderStatisticsModel;
    public constructor() { 
        super();
    }
    public withData(data: JobScriptOrderStatisticsModel): GetScriptJobStatisticsResponse {
        this['data'] = data;
        return this;
    }
}