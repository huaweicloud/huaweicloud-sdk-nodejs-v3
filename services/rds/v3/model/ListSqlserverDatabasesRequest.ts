

export class ListSqlserverDatabasesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public page?: number;
    public limit?: number;
    private 'db-name'?: string;
    private 'recover_model'?: string;
    public constructor(instanceId?: string, page?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['page'] = page;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListSqlserverDatabasesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSqlserverDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPage(page: number): ListSqlserverDatabasesRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListSqlserverDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withDbName(dbName: string): ListSqlserverDatabasesRequest {
        this['db-name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db-name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db-name'];
    }
    public withRecoverModel(recoverModel: string): ListSqlserverDatabasesRequest {
        this['recover_model'] = recoverModel;
        return this;
    }
    public set recoverModel(recoverModel: string  | undefined) {
        this['recover_model'] = recoverModel;
    }
    public get recoverModel(): string | undefined {
        return this['recover_model'];
    }
}