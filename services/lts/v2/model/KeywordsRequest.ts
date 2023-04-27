

export class KeywordsRequest {
    private 'log_stream_id': string | undefined;
    private 'log_stream_name'?: string | undefined;
    private 'log_group_id': string | undefined;
    private 'log_group_name'?: string | undefined;
    public keywords: string;
    public condition: KeywordsRequestConditionEnum;
    private 'number': number | undefined;
    private 'search_time_range': number | undefined;
    private 'search_time_range_unit': KeywordsRequestSearchTimeRangeUnitEnum | undefined;
    public constructor(logStreamId?: any, logGroupId?: any, keywords?: any, condition?: any, modelNumber?: any, searchTimeRange?: any, searchTimeRangeUnit?: any) { 
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
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): KeywordsRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): KeywordsRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): KeywordsRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withKeywords(keywords: string): KeywordsRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withCondition(condition: KeywordsRequestConditionEnum): KeywordsRequest {
        this['condition'] = condition;
        return this;
    }
    public withModelNumber(modelNumber: number): KeywordsRequest {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withSearchTimeRange(searchTimeRange: number): KeywordsRequest {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange() {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: KeywordsRequestSearchTimeRangeUnitEnum): KeywordsRequest {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: KeywordsRequestSearchTimeRangeUnitEnum | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit() {
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
