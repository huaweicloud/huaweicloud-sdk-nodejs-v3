import { StatisticForDetail } from './StatisticForDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisTopResponse extends SdkResponse {
    public statistics?: Array<StatisticForDetail>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<StatisticForDetail>): ListApisTopResponse {
        this['statistics'] = statistics;
        return this;
    }
}