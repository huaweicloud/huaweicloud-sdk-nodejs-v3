

export class ListBackupsRequest {
    private 'instance_id'?: string;
    private 'datastore_type'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: string;
    public type?: string;
    public limit?: number;
    public offset?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
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
    public withDatastoreType(datastoreType: string): ListBackupsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withBackupId(backupId: string): ListBackupsRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupType(backupType: string): ListBackupsRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withType(type: string): ListBackupsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBeginTime(beginTime: string): ListBackupsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListBackupsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}