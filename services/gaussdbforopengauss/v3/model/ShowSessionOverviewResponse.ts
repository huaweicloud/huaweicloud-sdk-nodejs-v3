
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSessionOverviewResponse extends SdkResponse {
    private 'active_num'?: string;
    private 'total_num'?: string;
    private 'slow_sql_num'?: string;
    private 'lock_num'?: string;
    public constructor() { 
        super();
    }
    public withActiveNum(activeNum: string): ShowSessionOverviewResponse {
        this['active_num'] = activeNum;
        return this;
    }
    public set activeNum(activeNum: string  | undefined) {
        this['active_num'] = activeNum;
    }
    public get activeNum(): string | undefined {
        return this['active_num'];
    }
    public withTotalNum(totalNum: string): ShowSessionOverviewResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: string  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): string | undefined {
        return this['total_num'];
    }
    public withSlowSqlNum(slowSqlNum: string): ShowSessionOverviewResponse {
        this['slow_sql_num'] = slowSqlNum;
        return this;
    }
    public set slowSqlNum(slowSqlNum: string  | undefined) {
        this['slow_sql_num'] = slowSqlNum;
    }
    public get slowSqlNum(): string | undefined {
        return this['slow_sql_num'];
    }
    public withLockNum(lockNum: string): ShowSessionOverviewResponse {
        this['lock_num'] = lockNum;
        return this;
    }
    public set lockNum(lockNum: string  | undefined) {
        this['lock_num'] = lockNum;
    }
    public get lockNum(): string | undefined {
        return this['lock_num'];
    }
}