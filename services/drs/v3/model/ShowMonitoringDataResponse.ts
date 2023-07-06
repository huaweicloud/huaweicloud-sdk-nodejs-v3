import { QueryDataGuardMonitorAndChartResp } from './QueryDataGuardMonitorAndChartResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitoringDataResponse extends SdkResponse {
    public results?: Array<QueryDataGuardMonitorAndChartResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<QueryDataGuardMonitorAndChartResp>): ShowMonitoringDataResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): ShowMonitoringDataResponse {
        this['count'] = count;
        return this;
    }
}