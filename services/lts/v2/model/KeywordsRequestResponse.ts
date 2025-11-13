import { CustomDate } from './CustomDate';


export class KeywordsRequestResponse {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public keywords?: string;
    public condition?: string;
    private 'number'?: number;
    private 'search_time_range'?: number;
    private 'search_time_range_unit'?: string;
    private 'custom_date'?: CustomDate;
    private 'is_time_range_relative'?: boolean;
    public constructor(logStreamId?: string, logGroupId?: string, keywords?: string, condition?: string, modelNumber?: number, searchTimeRange?: number, searchTimeRangeUnit?: string) { 
        this['log_stream_id'] = logStreamId;
        this['log_group_id'] = logGroupId;
        this['keywords'] = keywords;
        this['condition'] = condition;
        this['number'] = modelNumber;
        this['search_time_range'] = searchTimeRange;
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public withLogStreamId(logStreamId: string): KeywordsRequestResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): KeywordsRequestResponse {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): KeywordsRequestResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): KeywordsRequestResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withKeywords(keywords: string): KeywordsRequestResponse {
        this['keywords'] = keywords;
        return this;
    }
    public withCondition(condition: string): KeywordsRequestResponse {
        this['condition'] = condition;
        return this;
    }
    public withModelNumber(modelNumber: number): KeywordsRequestResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withSearchTimeRange(searchTimeRange: number): KeywordsRequestResponse {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number  | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange(): number | undefined {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: string): KeywordsRequestResponse {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: string  | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit(): string | undefined {
        return this['search_time_range_unit'];
    }
    public withCustomDate(customDate: CustomDate): KeywordsRequestResponse {
        this['custom_date'] = customDate;
        return this;
    }
    public set customDate(customDate: CustomDate  | undefined) {
        this['custom_date'] = customDate;
    }
    public get customDate(): CustomDate | undefined {
        return this['custom_date'];
    }
    public withIsTimeRangeRelative(isTimeRangeRelative: boolean): KeywordsRequestResponse {
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