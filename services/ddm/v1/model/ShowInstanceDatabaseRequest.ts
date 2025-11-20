

export class ShowInstanceDatabaseRequest {
    private 'instance_id'?: string;
    private 'database_name'?: string;
    public constructor(instanceId?: string, databaseName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
    }
    public withInstanceId(instanceId: string): ShowInstanceDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ShowInstanceDatabaseRequest {
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