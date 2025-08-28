import { TopSqlTrendItem } from './TopSqlTrendItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportTopSqlTrendDetailsResponse extends SdkResponse {
    private 'interval_millis'?: number;
    private 'top_sql_trend_items'?: Array<TopSqlTrendItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withIntervalMillis(intervalMillis: number): ExportTopSqlTrendDetailsResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withTopSqlTrendItems(topSqlTrendItems: Array<TopSqlTrendItem>): ExportTopSqlTrendDetailsResponse {
        this['top_sql_trend_items'] = topSqlTrendItems;
        return this;
    }
    public set topSqlTrendItems(topSqlTrendItems: Array<TopSqlTrendItem>  | undefined) {
        this['top_sql_trend_items'] = topSqlTrendItems;
    }
    public get topSqlTrendItems(): Array<TopSqlTrendItem> | undefined {
        return this['top_sql_trend_items'];
    }
    public withTotalCount(totalCount: number): ExportTopSqlTrendDetailsResponse {
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