

export class ListBackupsRequest {
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: ListBackupsRequestBackupTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public mode?: ListBackupsRequestModeEnum | string;
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
    public withBackupType(backupType: ListBackupsRequestBackupTypeEnum | string): ListBackupsRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: ListBackupsRequestBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): ListBackupsRequestBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
    public withOffset(offset: number): ListBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackupsRequest {
        this['limit'] = limit;
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
    public withMode(mode: ListBackupsRequestModeEnum | string): ListBackupsRequest {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestBackupTypeEnum {
    AUTO = 'Auto',
    MANUAL = 'Manual',
    INCREMENTAL = 'Incremental'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBackupsRequestModeEnum {
    SHARDING = 'Sharding',
    REPLICASET = 'ReplicaSet',
    SINGLE = 'Single'
}
