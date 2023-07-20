

export class ShowAllInstancesBackupsNewRequest {
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
    public withInstanceId(instanceId: string): ShowAllInstancesBackupsNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatastoreType(datastoreType: string): ShowAllInstancesBackupsNewRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withBackupId(backupId: string): ShowAllInstancesBackupsNewRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupType(backupType: string): ShowAllInstancesBackupsNewRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withType(type: string): ShowAllInstancesBackupsNewRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ShowAllInstancesBackupsNewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAllInstancesBackupsNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withBeginTime(beginTime: string): ShowAllInstancesBackupsNewRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowAllInstancesBackupsNewRequest {
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