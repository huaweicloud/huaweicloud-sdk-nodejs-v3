

export class ShowAllInstancesBackupsRequest {
    public offset?: number;
    public limit?: number;
    private 'datastore_type'?: ShowAllInstancesBackupsRequestDatastoreTypeEnum | string;
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: ShowAllInstancesBackupsRequestBackupTypeEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ShowAllInstancesBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAllInstancesBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDatastoreType(datastoreType: ShowAllInstancesBackupsRequestDatastoreTypeEnum | string): ShowAllInstancesBackupsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ShowAllInstancesBackupsRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ShowAllInstancesBackupsRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withInstanceId(instanceId: string): ShowAllInstancesBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ShowAllInstancesBackupsRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupType(backupType: ShowAllInstancesBackupsRequestBackupTypeEnum | string): ShowAllInstancesBackupsRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: ShowAllInstancesBackupsRequestBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): ShowAllInstancesBackupsRequestBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
    public withBeginTime(beginTime: string): ShowAllInstancesBackupsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowAllInstancesBackupsRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ShowAllInstancesBackupsRequestDatastoreTypeEnum {
    CASSANDRA = 'cassandra',
    MONGODB = 'mongodb',
    REDIS = 'redis',
    INFLUXDB = 'influxdb'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAllInstancesBackupsRequestBackupTypeEnum {
    AUTO = 'Auto 自动全量备份',
    MANUAL = 'Manual 手动全量备份。'
}
