

export class ListBackupsRequest {
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: ListBackupsRequestBackupTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public mode?: ListBackupsRequestModeEnum | string;
    private 'order_field'?: string;
    private 'order_rule'?: string;
    private 'backup_status'?: string;
    private 'backup_name'?: string;
    private 'backup_description'?: string;
    private 'instance_name'?: string;
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
    public withOrderField(orderField: string): ListBackupsRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderRule(orderRule: string): ListBackupsRequest {
        this['order_rule'] = orderRule;
        return this;
    }
    public set orderRule(orderRule: string  | undefined) {
        this['order_rule'] = orderRule;
    }
    public get orderRule(): string | undefined {
        return this['order_rule'];
    }
    public withBackupStatus(backupStatus: string): ListBackupsRequest {
        this['backup_status'] = backupStatus;
        return this;
    }
    public set backupStatus(backupStatus: string  | undefined) {
        this['backup_status'] = backupStatus;
    }
    public get backupStatus(): string | undefined {
        return this['backup_status'];
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
    public withBackupDescription(backupDescription: string): ListBackupsRequest {
        this['backup_description'] = backupDescription;
        return this;
    }
    public set backupDescription(backupDescription: string  | undefined) {
        this['backup_description'] = backupDescription;
    }
    public get backupDescription(): string | undefined {
        return this['backup_description'];
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
