

export class ListPostgresqlExtensionRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'database_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, databaseName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
    }
    public withXLanguage(xLanguage: string): ListPostgresqlExtensionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPostgresqlExtensionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ListPostgresqlExtensionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withOffset(offset: number): ListPostgresqlExtensionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPostgresqlExtensionRequest {
        this['limit'] = limit;
        return this;
    }
}