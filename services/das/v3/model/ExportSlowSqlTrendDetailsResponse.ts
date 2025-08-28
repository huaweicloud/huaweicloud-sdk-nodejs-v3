import { SlowSqlTrendItem } from './SlowSqlTrendItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSlowSqlTrendDetailsResponse extends SdkResponse {
    private 'slow_sql_trend_items'?: Array<SlowSqlTrendItem>;
    private 'interval_millis'?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSlowSqlTrendItems(slowSqlTrendItems: Array<SlowSqlTrendItem>): ExportSlowSqlTrendDetailsResponse {
        this['slow_sql_trend_items'] = slowSqlTrendItems;
        return this;
    }
    public set slowSqlTrendItems(slowSqlTrendItems: Array<SlowSqlTrendItem>  | undefined) {
        this['slow_sql_trend_items'] = slowSqlTrendItems;
    }
    public get slowSqlTrendItems(): Array<SlowSqlTrendItem> | undefined {
        return this['slow_sql_trend_items'];
    }
    public withIntervalMillis(intervalMillis: number): ExportSlowSqlTrendDetailsResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withTotalCount(totalCount: number): ExportSlowSqlTrendDetailsResponse {
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