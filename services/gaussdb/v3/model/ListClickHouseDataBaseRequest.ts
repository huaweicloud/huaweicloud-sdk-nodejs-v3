

export class ListClickHouseDataBaseRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'database_name'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListClickHouseDataBaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListClickHouseDataBaseRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClickHouseDataBaseRequest {
        this['offset'] = offset;
        return this;
    }
    public withDatabaseName(databaseName: string): ListClickHouseDataBaseRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withXLanguage(xLanguage: string): ListClickHouseDataBaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}