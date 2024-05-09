

export class ListStarRocksDataBasesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public limit?: string;
    public offset?: string;
    private 'database_name'?: string;
    public constructor(xLanguage?: string, instanceId?: string) { 
        this['X-Language'] = xLanguage;
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListStarRocksDataBasesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListStarRocksDataBasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: string): ListStarRocksDataBasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListStarRocksDataBasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withDatabaseName(databaseName: string): ListStarRocksDataBasesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}