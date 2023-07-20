import { MysqlSlowLogStatisticsItem } from './MysqlSlowLogStatisticsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogStatisticsForLtsResponse extends SdkResponse {
    private 'slow_log_list'?: Array<MysqlSlowLogStatisticsItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<MysqlSlowLogStatisticsItem>): ListSlowLogStatisticsForLtsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<MysqlSlowLogStatisticsItem>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<MysqlSlowLogStatisticsItem> | undefined {
        return this['slow_log_list'];
    }
    public withTotalCount(totalCount: number): ListSlowLogStatisticsForLtsResponse {
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