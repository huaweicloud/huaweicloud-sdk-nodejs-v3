

export class ListPostgresqlDatabaseSchemasRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    public page?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string, page?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['page'] = page;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListPostgresqlDatabaseSchemasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPostgresqlDatabaseSchemasRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListPostgresqlDatabaseSchemasRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withPage(page: number): ListPostgresqlDatabaseSchemasRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListPostgresqlDatabaseSchemasRequest {
        this['limit'] = limit;
        return this;
    }
}