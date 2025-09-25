

export class ShowGlobalSlowSqlDetailRequestBody {
    private 'instance_id'?: string;
    private 'node_ids'?: Array<string>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'sql_id'?: string;
    private 'component_type'?: ShowGlobalSlowSqlDetailRequestBodyComponentTypeEnum | string;
    public constructor(instanceId?: string, nodeIds?: Array<string>, startTime?: number, endTime?: number, sqlId?: string, componentType?: string) { 
        this['instance_id'] = instanceId;
        this['node_ids'] = nodeIds;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['sql_id'] = sqlId;
        this['component_type'] = componentType;
    }
    public withInstanceId(instanceId: string): ShowGlobalSlowSqlDetailRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ShowGlobalSlowSqlDetailRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withStartTime(startTime: number): ShowGlobalSlowSqlDetailRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowGlobalSlowSqlDetailRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSqlId(sqlId: string): ShowGlobalSlowSqlDetailRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withComponentType(componentType: ShowGlobalSlowSqlDetailRequestBodyComponentTypeEnum | string): ShowGlobalSlowSqlDetailRequestBody {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: ShowGlobalSlowSqlDetailRequestBodyComponentTypeEnum | string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): ShowGlobalSlowSqlDetailRequestBodyComponentTypeEnum | string | undefined {
        return this['component_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGlobalSlowSqlDetailRequestBodyComponentTypeEnum {
    CN = 'cn',
    DN = 'dn'
}
