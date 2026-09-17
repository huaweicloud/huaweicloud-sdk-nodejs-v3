

export class ListRapidGrowthTablesRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'database_name'?: string;
    public keyword?: string;
    public constructor(instanceId?: string, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): ListRapidGrowthTablesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ListRapidGrowthTablesRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDatabaseName(databaseName: string): ListRapidGrowthTablesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withKeyword(keyword: string): ListRapidGrowthTablesRequest {
        this['keyword'] = keyword;
        return this;
    }
}