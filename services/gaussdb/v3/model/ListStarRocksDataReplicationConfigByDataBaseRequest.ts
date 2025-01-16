

export class ListStarRocksDataReplicationConfigByDataBaseRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public database?: string;
    public constructor(instanceId?: string, xLanguage?: string, database?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
        this['database'] = database;
    }
    public withInstanceId(instanceId: string): ListStarRocksDataReplicationConfigByDataBaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ListStarRocksDataReplicationConfigByDataBaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabase(database: string): ListStarRocksDataReplicationConfigByDataBaseRequest {
        this['database'] = database;
        return this;
    }
}