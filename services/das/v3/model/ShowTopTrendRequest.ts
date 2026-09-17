

export class ShowTopTrendRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'object_type'?: string;
    private 'object_name'?: string;
    private 'database_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'node_id'?: string;
    public constructor(instanceId?: string, engineType?: string, objectType?: string, objectName?: string, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
        this['object_type'] = objectType;
        this['object_name'] = objectName;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowTopTrendRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowTopTrendRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withObjectType(objectType: string): ShowTopTrendRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): ShowTopTrendRequest {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withDatabaseName(databaseName: string): ShowTopTrendRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withStartTime(startTime: number): ShowTopTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowTopTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withNodeId(nodeId: string): ShowTopTrendRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}