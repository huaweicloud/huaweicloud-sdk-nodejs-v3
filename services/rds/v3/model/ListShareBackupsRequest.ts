

export class ListShareBackupsRequest {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'backup_name'?: string;
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListShareBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListShareBackupsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withBackupName(backupName: string): ListShareBackupsRequest {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withOffset(offset: string): ListShareBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListShareBackupsRequest {
        this['limit'] = limit;
        return this;
    }
}