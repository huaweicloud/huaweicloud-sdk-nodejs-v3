import { DdlLogInfo } from './DdlLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdlLogsResponse extends SdkResponse {
    private 'ddl_logs'?: Array<DdlLogInfo>;
    private 'total_count'?: number;
    private 'keey_days'?: number;
    private 'switch_status'?: string;
    public constructor() { 
        super();
    }
    public withDdlLogs(ddlLogs: Array<DdlLogInfo>): ListDdlLogsResponse {
        this['ddl_logs'] = ddlLogs;
        return this;
    }
    public set ddlLogs(ddlLogs: Array<DdlLogInfo>  | undefined) {
        this['ddl_logs'] = ddlLogs;
    }
    public get ddlLogs(): Array<DdlLogInfo> | undefined {
        return this['ddl_logs'];
    }
    public withTotalCount(totalCount: number): ListDdlLogsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withKeeyDays(keeyDays: number): ListDdlLogsResponse {
        this['keey_days'] = keeyDays;
        return this;
    }
    public set keeyDays(keeyDays: number  | undefined) {
        this['keey_days'] = keeyDays;
    }
    public get keeyDays(): number | undefined {
        return this['keey_days'];
    }
    public withSwitchStatus(switchStatus: string): ListDdlLogsResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
}