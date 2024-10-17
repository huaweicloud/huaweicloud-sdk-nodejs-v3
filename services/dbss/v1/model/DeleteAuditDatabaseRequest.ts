

export class DeleteAuditDatabaseRequest {
    private 'instance_id'?: string;
    private 'db_id'?: string;
    public constructor(instanceId?: string, dbId?: string) { 
        this['instance_id'] = instanceId;
        this['db_id'] = dbId;
    }
    public withInstanceId(instanceId: string): DeleteAuditDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbId(dbId: string): DeleteAuditDatabaseRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
}