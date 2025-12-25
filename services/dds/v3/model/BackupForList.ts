import { BackupDatabase } from './BackupDatabase';


export class BackupForList {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public datastore?: BackupDatabase;
    public type?: BackupForListTypeEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: BackupForListStatusEnum | string;
    public size?: number;
    public description?: string;
    private 'instance_status'?: BackupForListInstanceStatusEnum | string;
    private 'instance_mode'?: string;
    private 'is_instance_restoring'?: boolean;
    private 'backup_method'?: string;
    private 'kms_enable'?: boolean;
    public deletable?: boolean;
    public constructor(id?: string, name?: string, instanceId?: string, instanceName?: string, datastore?: BackupDatabase, type?: string, beginTime?: string, endTime?: string, status?: string, size?: number, description?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['datastore'] = datastore;
        this['type'] = type;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['status'] = status;
        this['size'] = size;
        this['description'] = description;
    }
    public withId(id: string): BackupForList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupForList {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): BackupForList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BackupForList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDatastore(datastore: BackupDatabase): BackupForList {
        this['datastore'] = datastore;
        return this;
    }
    public withType(type: BackupForListTypeEnum | string): BackupForList {
        this['type'] = type;
        return this;
    }
    public withBeginTime(beginTime: string): BackupForList {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BackupForList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: BackupForListStatusEnum | string): BackupForList {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): BackupForList {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): BackupForList {
        this['description'] = description;
        return this;
    }
    public withInstanceStatus(instanceStatus: BackupForListInstanceStatusEnum | string): BackupForList {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: BackupForListInstanceStatusEnum | string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): BackupForListInstanceStatusEnum | string | undefined {
        return this['instance_status'];
    }
    public withInstanceMode(instanceMode: string): BackupForList {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withIsInstanceRestoring(isInstanceRestoring: boolean): BackupForList {
        this['is_instance_restoring'] = isInstanceRestoring;
        return this;
    }
    public set isInstanceRestoring(isInstanceRestoring: boolean  | undefined) {
        this['is_instance_restoring'] = isInstanceRestoring;
    }
    public get isInstanceRestoring(): boolean | undefined {
        return this['is_instance_restoring'];
    }
    public withBackupMethod(backupMethod: string): BackupForList {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
    public withKmsEnable(kmsEnable: boolean): BackupForList {
        this['kms_enable'] = kmsEnable;
        return this;
    }
    public set kmsEnable(kmsEnable: boolean  | undefined) {
        this['kms_enable'] = kmsEnable;
    }
    public get kmsEnable(): boolean | undefined {
        return this['kms_enable'];
    }
    public withDeletable(deletable: boolean): BackupForList {
        this['deletable'] = deletable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupForListTypeEnum {
    AUTO = 'auto',
    MANUAL = 'manual',
    FRAGMENT = 'fragment',
    INCREMENTAL = 'incremental'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupForListStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    DELETING = 'DELETING'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupForListInstanceStatusEnum {
    NORMAL = 'normal',
    ABNORMAL = 'abnormal',
    CREATING = 'creating',
    FROZEN = 'frozen',
    DATA_DISK_FULL = 'data_disk_full',
    ENLARGEFAIL = 'enlargefail'
}
