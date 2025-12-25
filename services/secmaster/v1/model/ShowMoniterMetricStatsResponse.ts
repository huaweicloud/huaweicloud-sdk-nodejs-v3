import { Result } from './Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMoniterMetricStatsResponse extends SdkResponse {
    public result?: Array<Result>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<Result>): ShowMoniterMetricStatsResponse {
        this['result'] = result;
        return this;
    }
}