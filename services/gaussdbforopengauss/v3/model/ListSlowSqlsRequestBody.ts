import { MultiQueryConditionOption } from './MultiQueryConditionOption';


export class ListSlowSqlsRequestBody {
    private 'instance_id'?: string;
    private 'node_ids'?: Array<string>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'sql_id'?: string;
    public threshold?: number;
    private 'multi_queries'?: Array<MultiQueryConditionOption>;
    public constructor(instanceId?: string, nodeIds?: Array<string>, startTime?: number, endTime?: number, threshold?: number) { 
        this['instance_id'] = instanceId;
        this['node_ids'] = nodeIds;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['threshold'] = threshold;
    }
    public withInstanceId(instanceId: string): ListSlowSqlsRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ListSlowSqlsRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withStartTime(startTime: number): ListSlowSqlsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListSlowSqlsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSqlId(sqlId: string): ListSlowSqlsRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withThreshold(threshold: number): ListSlowSqlsRequestBody {
        this['threshold'] = threshold;
        return this;
    }
    public withMultiQueries(multiQueries: Array<MultiQueryConditionOption>): ListSlowSqlsRequestBody {
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