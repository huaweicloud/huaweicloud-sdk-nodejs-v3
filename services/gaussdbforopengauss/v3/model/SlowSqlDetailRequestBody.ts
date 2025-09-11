import { MultiQueryConditionOption } from './MultiQueryConditionOption';


export class SlowSqlDetailRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'instance_id'?: string;
    private 'multi_queries'?: Array<MultiQueryConditionOption>;
    private 'sql_id'?: string;
    private 'node_ids'?: Array<string>;
    public constructor(startTime?: number, endTime?: number, instanceId?: string, sqlId?: string, nodeIds?: Array<string>) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['instance_id'] = instanceId;
        this['sql_id'] = sqlId;
        this['node_ids'] = nodeIds;
    }
    public withStartTime(startTime: number): SlowSqlDetailRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): SlowSqlDetailRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withInstanceId(instanceId: string): SlowSqlDetailRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMultiQueries(multiQueries: Array<MultiQueryConditionOption>): SlowSqlDetailRequestBody {
        this['multi_queries'] = multiQueries;
        return this;
    }
    public set multiQueries(multiQueries: Array<MultiQueryConditionOption>  | undefined) {
        this['multi_queries'] = multiQueries;
    }
    public get multiQueries(): Array<MultiQueryConditionOption> | undefined {
        return this['multi_queries'];
    }
    public withSqlId(sqlId: string): SlowSqlDetailRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withNodeIds(nodeIds: Array<string>): SlowSqlDetailRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}