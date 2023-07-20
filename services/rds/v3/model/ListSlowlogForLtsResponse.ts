import { MysqlSlowLogDetailsItem } from './MysqlSlowLogDetailsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowlogForLtsResponse extends SdkResponse {
    private 'slow_log_list'?: Array<MysqlSlowLogDetailsItem>;
    private 'long_query_time'?: string;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<MysqlSlowLogDetailsItem>): ListSlowlogForLtsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<MysqlSlowLogDetailsItem>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<MysqlSlowLogDetailsItem> | undefined {
        return this['slow_log_list'];
    }
    public withLongQueryTime(longQueryTime: string): ListSlowlogForLtsResponse {
        this['long_query_time'] = longQueryTime;
        return this;
    }
    public set longQueryTime(longQueryTime: string  | undefined) {
        this['long_query_time'] = longQueryTime;
    }
    public get longQueryTime(): string | undefined {
        return this['long_query_time'];
    }
}