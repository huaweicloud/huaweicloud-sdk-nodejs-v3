

export class ListBackupsRequest {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'backup_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListBackupsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withBackupName(backupName: string): ListBackupsRequest {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withOffset(offset: number): ListBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackupsRequest {
        this['limit'] = limit;
        return this;
    }
}