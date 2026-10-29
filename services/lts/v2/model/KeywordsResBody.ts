import { CustomDate } from './CustomDate';
import { KeywordsAlarmConditions } from './KeywordsAlarmConditions';
import { TimeRange } from './TimeRange';


export class KeywordsResBody {
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public keywords?: string;
    public condition?: KeywordsResBodyConditionEnum | string;
    private 'number'?: number;
    private 'search_time_range'?: number;
    private 'search_time_range_unit'?: string;
    private 'custom_date'?: CustomDate;
    private 'is_time_range_relative'?: boolean;
    public conditions?: Array<KeywordsAlarmConditions>;
    private 'log_group_name_alias'?: string;
    private 'log_stream_name_alias'?: string;
    private 'eps_id'?: string;
    private 'time_range'?: TimeRange;
    public constructor() { 
    }
    public withLogStreamId(logStreamId: string): KeywordsResBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): KeywordsResBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogGroupId(logGroupId: string): KeywordsResBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): KeywordsResBody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withKeywords(keywords: string): KeywordsResBody {
        this['keywords'] = keywords;
        return this;
    }
    public withCondition(condition: KeywordsResBodyConditionEnum | string): KeywordsResBody {
        this['condition'] = condition;
        return this;
    }
    public withModelNumber(modelNumber: number): KeywordsResBody {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withSearchTimeRange(searchTimeRange: number): KeywordsResBody {
        this['search_time_range'] = searchTimeRange;
        return this;
    }
    public set searchTimeRange(searchTimeRange: number  | undefined) {
        this['search_time_range'] = searchTimeRange;
    }
    public get searchTimeRange(): number | undefined {
        return this['search_time_range'];
    }
    public withSearchTimeRangeUnit(searchTimeRangeUnit: string): KeywordsResBody {
        this['search_time_range_unit'] = searchTimeRangeUnit;
        return this;
    }
    public set searchTimeRangeUnit(searchTimeRangeUnit: string  | undefined) {
        this['search_time_range_unit'] = searchTimeRangeUnit;
    }
    public get searchTimeRangeUnit(): string | undefined {
        return this['search_time_range_unit'];
    }
    public withCustomDate(customDate: CustomDate): KeywordsResBody {
        this['custom_date'] = customDate;
        return this;
    }
    public set customDate(customDate: CustomDate  | undefined) {
        this['custom_date'] = customDate;
    }
    public get customDate(): CustomDate | undefined {
        return this['custom_date'];
    }
    public withIsTimeRangeRelative(isTimeRangeRelative: boolean): KeywordsResBody {
        this['is_time_range_relative'] = isTimeRangeRelative;
        return this;
    }
    public set isTimeRangeRelative(isTimeRangeRelative: boolean  | undefined) {
        this['is_time_range_relative'] = isTimeRangeRelative;
    }
    public get isTimeRangeRelative(): boolean | undefined {
        return this['is_time_range_relative'];
    }
    public withConditions(conditions: Array<KeywordsAlarmConditions>): KeywordsResBody {
        this['conditions'] = conditions;
        return this;
    }
    public withLogGroupNameAlias(logGroupNameAlias: string): KeywordsResBody {
        this['log_group_name_alias'] = logGroupNameAlias;
        return this;
    }
    public set logGroupNameAlias(logGroupNameAlias: string  | undefined) {
        this['log_group_name_alias'] = logGroupNameAlias;
    }
    public get logGroupNameAlias(): string | undefined {
        return this['log_group_name_alias'];
    }
    public withLogStreamNameAlias(logStreamNameAlias: string): KeywordsResBody {
        this['log_stream_name_alias'] = logStreamNameAlias;
        return this;
    }
    public set logStreamNameAlias(logStreamNameAlias: string  | undefined) {
        this['log_stream_name_alias'] = logStreamNameAlias;
    }
    public get logStreamNameAlias(): string | undefined {
        return this['log_stream_name_alias'];
    }
    public withEpsId(epsId: string): KeywordsResBody {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withTimeRange(timeRange: TimeRange): KeywordsResBody {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: TimeRange  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): TimeRange | undefined {
        return this['time_range'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeywordsResBodyConditionEnum {
    GreaterThanOrEqualTo = '>=',
    LessThanOrEqualTo = '<=',
    LessThan = '<',
    GreaterThan = '>'
}
