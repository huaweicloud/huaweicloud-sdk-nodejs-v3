

export class SupabaseExistingInstanceRequest {
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'database_pwd'?: string;
    public constructor(instanceId?: string, databaseName?: string, databasePwd?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
        this['database_pwd'] = databasePwd;
    }
    public withInstanceId(instanceId: string): SupabaseExistingInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): SupabaseExistingInstanceRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDatabasePwd(databasePwd: string): SupabaseExistingInstanceRequest {
        this['database_pwd'] = databasePwd;
        return this;
    }
    public set databasePwd(databasePwd: string  | undefined) {
        this['database_pwd'] = databasePwd;
    }
    public get databasePwd(): string | undefined {
        return this['database_pwd'];
    }
}