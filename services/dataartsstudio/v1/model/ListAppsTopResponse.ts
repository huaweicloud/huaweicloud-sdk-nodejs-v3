import { StatisticForDetail } from './StatisticForDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsTopResponse extends SdkResponse {
    public statistics?: Array<StatisticForDetail>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<StatisticForDetail>): ListAppsTopResponse {
        this['statistics'] = statistics;
        return this;
    }
}