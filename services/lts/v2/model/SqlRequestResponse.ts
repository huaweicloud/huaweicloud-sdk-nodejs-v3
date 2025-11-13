import { CustomDate } from './CustomDate';


export class SqlRequestResponse {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public sql?: string;
    private 'sql_request_title'?: string;
    private 'search_time_range'?: number;
    private 'search_time_range_unit'?: string;
    private 'custom_date'?: CustomDate;
    private 'is_time_range_relative'?: boolean;
    public constructor(logStreamId?: string, logGroupId?: string, sql?: string, sqlRequestTitle?: string, searchTimeRange?: number, searchTimeRangeUnit?: string) { 
        this['log_stream_id'] = logStreamId;
        this['log_group_id'] = logGroupId;
        this['sql'] = sql;
        this['sql_request_title'] = sqlRequestTitle;
        this['search_time_range'] = searchTimeRange;
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public withLogStreamId(logStreamId: string): SqlRequestResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): SqlRequestResponse {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): SqlRequestResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): SqlRequestResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withSql(sql: string): SqlRequestResponse {
        this['sql'] = sql;
        return this;
    }
    public withSqlRequestTitle(sqlRequestTitle: string): SqlRequestResponse {
        this['sql_request_title'] = sqlRequestTitle;
        return this;
    }
    public set sqlRequestTitle(sqlRequestTitle: string  | undefined) {
        this['sql_request_title'] = sqlRequestTitle;
    }
    public get sqlRequestTitle(): string | undefined {
        return this['sql_request_title'];
    }
    public withSearchTimeRange(searchTimeRange: number): SqlRequestResponse {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number  | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange(): number | undefined {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: string): SqlRequestResponse {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: string  | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit(): string | undefined {
        return this['search_time_range_unit'];
    }
    public withCustomDate(customDate: CustomDate): SqlRequestResponse {
        this['custom_date'] = customDate;
        return this;
    }
    public set customDate(customDate: CustomDate  | undefined) {
        this['custom_date'] = customDate;
    }
    public get customDate(): CustomDate | undefined {
        return this['custom_date'];
    }
    public withIsTimeRangeRelative(isTimeRangeRelative: boolean): SqlRequestResponse {
        this['is_time_range_relative'] = isTimeRangeRelative;
        return this;
    }
    public set isTimeRangeRelative(isTimeRangeRelative: boolean  | undefined) {
        this['is_time_range_relative'] = isTimeRangeRelative;
    }
    public get isTimeRangeRelative(): boolean | undefined {
        return this['is_time_range_relative'];
    }
}