

export class KeywordsRequest {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public keywords?: string;
    public condition?: KeywordsRequestConditionEnum | string;
    private 'number'?: number;
    private 'search_time_range'?: number;
    private 'search_time_range_unit'?: KeywordsRequestSearchTimeRangeUnitEnum | string;
    public constructor(logStreamId?: string, logGroupId?: string, keywords?: string, condition?: string, modelNumber?: number, searchTimeRange?: number, searchTimeRangeUnit?: string) { 
        this['log_stream_id'] = logStreamId;
        this['log_group_id'] = logGroupId;
        this['keywords'] = keywords;
        this['condition'] = condition;
        this['number'] = modelNumber;
        this['search_time_range'] = searchTimeRange;
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public withLogStreamId(logStreamId: string): KeywordsRequest {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): KeywordsRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): KeywordsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): KeywordsRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withKeywords(keywords: string): KeywordsRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withCondition(condition: KeywordsRequestConditionEnum | string): KeywordsRequest {
        this['condition'] = condition;
        return this;
    }
    public withModelNumber(modelNumber: number): KeywordsRequest {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withSearchTimeRange(searchTimeRange: number): KeywordsRequest {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number  | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange(): number | undefined {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: KeywordsRequestSearchTimeRangeUnitEnum | string): KeywordsRequest {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: KeywordsRequestSearchTimeRangeUnitEnum | string  | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit(): KeywordsRequestSearchTimeRangeUnitEnum | string | undefined {
        return this['search_time_range_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeywordsRequestConditionEnum {
    GreaterThanOrEqualTo = '>=',
    LessThanOrEqualTo = '<=',
    LessThan = '<',
    GreaterThan = '>'
}
/**
    * @export
    * @enum {string}
    */
export enum KeywordsRequestSearchTimeRangeUnitEnum {
    MINUTE = 'minute'
}
