import { MultiQueryConditionOption } from './MultiQueryConditionOption';


export class ListTopSqlsRequestBody {
    private 'instance_id'?: string;
    private 'node_ids'?: Array<string>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'start_time_utc'?: string;
    private 'end_time_utc'?: string;
    private 'user_name'?: string;
    private 'sql_text'?: string;
    private 'sql_id'?: string;
    private 'db_name'?: string;
    private 'support_system'?: boolean;
    private 'multi_queries'?: Array<MultiQueryConditionOption>;
    public constructor(instanceId?: string, nodeIds?: Array<string>, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['node_ids'] = nodeIds;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ListTopSqlsRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ListTopSqlsRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withStartTime(startTime: number): ListTopSqlsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListTopSqlsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStartTimeUtc(startTimeUtc: string): ListTopSqlsRequestBody {
        this['start_time_utc'] = startTimeUtc;
        return this;
    }
    public set startTimeUtc(startTimeUtc: string  | undefined) {
        this['start_time_utc'] = startTimeUtc;
    }
    public get startTimeUtc(): string | undefined {
        return this['start_time_utc'];
    }
    public withEndTimeUtc(endTimeUtc: string): ListTopSqlsRequestBody {
        this['end_time_utc'] = endTimeUtc;
        return this;
    }
    public set endTimeUtc(endTimeUtc: string  | undefined) {
        this['end_time_utc'] = endTimeUtc;
    }
    public get endTimeUtc(): string | undefined {
        return this['end_time_utc'];
    }
    public withUserName(userName: string): ListTopSqlsRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSqlText(sqlText: string): ListTopSqlsRequestBody {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withSqlId(sqlId: string): ListTopSqlsRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withDbName(dbName: string): ListTopSqlsRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSupportSystem(supportSystem: boolean): ListTopSqlsRequestBody {
        this['support_system'] = supportSystem;
        return this;
    }
    public set supportSystem(supportSystem: boolean  | undefined) {
        this['support_system'] = supportSystem;
    }
    public get supportSystem(): boolean | undefined {
        return this['support_system'];
    }
    public withMultiQueries(multiQueries: Array<MultiQueryConditionOption>): ListTopSqlsRequestBody {
        this['multi_queries'] = multiQueries;
        return this;
    }
    public set multiQueries(multiQueries: Array<MultiQueryConditionOption>  | undefined) {
        this['multi_queries'] = multiQueries;
    }
    public get multiQueries(): Array<MultiQueryConditionOption> | undefined {
        return this['multi_queries'];
    }
}