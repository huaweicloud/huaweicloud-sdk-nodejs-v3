import { ProxySlowLogDetail } from './ProxySlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMySqlProxySlowLogListResponse extends SdkResponse {
    private 'slow_log_list'?: Array<ProxySlowLogDetail>;
    private 'slow_log_column'?: Array<string>;
    private 'slow_log_query_time'?: string;
    private 'lts_slow_log_enabled'?: string;
    private 'support_switch_lts_slow_log'?: boolean;
    private 'total_count'?: string;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<ProxySlowLogDetail>): ShowMySqlProxySlowLogListResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<ProxySlowLogDetail>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<ProxySlowLogDetail> | undefined {
        return this['slow_log_list'];
    }
    public withSlowLogColumn(slowLogColumn: Array<string>): ShowMySqlProxySlowLogListResponse {
        this['slow_log_column'] = slowLogColumn;
        return this;
    }
    public set slowLogColumn(slowLogColumn: Array<string>  | undefined) {
        this['slow_log_column'] = slowLogColumn;
    }
    public get slowLogColumn(): Array<string> | undefined {
        return this['slow_log_column'];
    }
    public withSlowLogQueryTime(slowLogQueryTime: string): ShowMySqlProxySlowLogListResponse {
        this['slow_log_query_time'] = slowLogQueryTime;
        return this;
    }
    public set slowLogQueryTime(slowLogQueryTime: string  | undefined) {
        this['slow_log_query_time'] = slowLogQueryTime;
    }
    public get slowLogQueryTime(): string | undefined {
        return this['slow_log_query_time'];
    }
    public withLtsSlowLogEnabled(ltsSlowLogEnabled: string): ShowMySqlProxySlowLogListResponse {
        this['lts_slow_log_enabled'] = ltsSlowLogEnabled;
        return this;
    }
    public set ltsSlowLogEnabled(ltsSlowLogEnabled: string  | undefined) {
        this['lts_slow_log_enabled'] = ltsSlowLogEnabled;
    }
    public get ltsSlowLogEnabled(): string | undefined {
        return this['lts_slow_log_enabled'];
    }
    public withSupportSwitchLtsSlowLog(supportSwitchLtsSlowLog: boolean): ShowMySqlProxySlowLogListResponse {
        this['support_switch_lts_slow_log'] = supportSwitchLtsSlowLog;
        return this;
    }
    public set supportSwitchLtsSlowLog(supportSwitchLtsSlowLog: boolean  | undefined) {
        this['support_switch_lts_slow_log'] = supportSwitchLtsSlowLog;
    }
    public get supportSwitchLtsSlowLog(): boolean | undefined {
        return this['support_switch_lts_slow_log'];
    }
    public withTotalCount(totalCount: string): ShowMySqlProxySlowLogListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
}