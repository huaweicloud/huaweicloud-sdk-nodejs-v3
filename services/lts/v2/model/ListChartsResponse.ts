import { ChartConfig } from './ChartConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListChartsResponse extends SdkResponse {
    public id?: string;
    public sql?: string;
    public title?: string;
    public type?: ListChartsResponseTypeEnum;
    private 'log_group_id'?: string | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_stream_id'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public config?: ChartConfig;
    public constructor() { 
        super();
    }
    public withId(id: string): ListChartsResponse {
        this['id'] = id;
        return this;
    }
    public withSql(sql: string): ListChartsResponse {
        this['sql'] = sql;
        return this;
    }
    public withTitle(title: string): ListChartsResponse {
        this['title'] = title;
        return this;
    }
    public withType(type: ListChartsResponseTypeEnum): ListChartsResponse {
        this['type'] = type;
        return this;
    }
    public withLogGroupId(logGroupId: string): ListChartsResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): ListChartsResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): ListChartsResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): ListChartsResponse {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withConfig(config: ChartConfig): ListChartsResponse {
        this['config'] = config;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListChartsResponseTypeEnum {
    TABLE = 'table',
    BAR = 'bar',
    LINE = 'line',
    PIE = 'pie',
    NUMBER = 'number'
}
