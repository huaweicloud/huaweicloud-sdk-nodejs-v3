

export class SqlRequest {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public sql?: string;
    private 'sql_request_title'?: string;
    private 'search_time_range'?: number;
    private 'search_time_range_unit'?: SqlRequestSearchTimeRangeUnitEnum | string;
    public constructor(logStreamId?: string, logGroupId?: string, sql?: string, sqlRequestTitle?: string, searchTimeRange?: number, searchTimeRangeUnit?: string) { 
        this['log_stream_id'] = logStreamId;
        this['log_group_id'] = logGroupId;
        this['sql'] = sql;
        this['sql_request_title'] = sqlRequestTitle;
        this['search_time_range'] = searchTimeRange;
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public withLogStreamId(logStreamId: string): SqlRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): SqlRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): SqlRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): SqlRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withSql(sql: string): SqlRequest {
        this['sql'] = sql;
        return this;
    }
    public withSqlRequestTitle(sqlRequestTitle: string): SqlRequest {
        this['sql_request_title'] = sqlRequestTitle;
        return this;
    }
    public set sqlRequestTitle(sqlRequestTitle: string  | undefined) {
        this['sql_request_title'] = sqlRequestTitle;
    }
    public get sqlRequestTitle(): string | undefined {
        return this['sql_request_title'];
    }
    public withSearchTimeRange(searchTimeRange: number): SqlRequest {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number  | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange(): number | undefined {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: SqlRequestSearchTimeRangeUnitEnum | string): SqlRequest {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: SqlRequestSearchTimeRangeUnitEnum | string  | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit(): SqlRequestSearchTimeRangeUnitEnum | string | undefined {
        return this['search_time_range_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlRequestSearchTimeRangeUnitEnum {
    MINUTE = 'minute',
    HOUR = 'hour'
}
