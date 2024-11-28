import { ShowSlowLogStatisticsItem } from './ShowSlowLogStatisticsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogStatisticsResponse extends SdkResponse {
    private 'slow_log_list'?: Array<ShowSlowLogStatisticsItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<ShowSlowLogStatisticsItem>): ShowSlowLogStatisticsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<ShowSlowLogStatisticsItem>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<ShowSlowLogStatisticsItem> | undefined {
        return this['slow_log_list'];
    }
    public withTotalCount(totalCount: number): ShowSlowLogStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}