

export class DeleteClickHouseDataBaseReplicationRequest {
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, databaseName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
    }
    public withInstanceId(instanceId: string): DeleteClickHouseDataBaseReplicationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): DeleteClickHouseDataBaseReplicationRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withXLanguage(xLanguage: string): DeleteClickHouseDataBaseReplicationRequest {
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