import { DailyData } from './DailyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDailyReportResponse extends SdkResponse {
    public data?: Array<DailyData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<DailyData>): ListDailyReportResponse {
        this['data'] = data;
        return this;
    }
}