

export class RollbackMigrationRequest {
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string, dbName?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['job_id'] = jobId;
    }
    public withInstanceId(instanceId: string): RollbackMigrationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): RollbackMigrationRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withJobId(jobId: string): RollbackMigrationRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}