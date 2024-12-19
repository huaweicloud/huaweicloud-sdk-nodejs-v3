

export class RecycleInstancesDetailResultV1 {
    public id?: string;
    public name?: string;
    private 'ha_mode'?: RecycleInstancesDetailResultV1HaModeEnum | string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'pay_model'?: RecycleInstancesDetailResultV1PayModelEnum | string;
    private 'created_at'?: string;
    private 'deleted_at'?: string;
    private 'volume_type'?: RecycleInstancesDetailResultV1VolumeTypeEnum | string;
    private 'volume_size'?: string;
    private 'data_vip'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'backup_level'?: string;
    private 'recycle_backup_id'?: string;
    private 'recycle_status'?: RecycleInstancesDetailResultV1RecycleStatusEnum | string;
    public mode?: RecycleInstancesDetailResultV1ModeEnum | string;
    public constructor(id?: string, name?: string, haMode?: string, engineVersion?: string, payModel?: string, createdAt?: string, deletedAt?: string, volumeType?: string, dataVip?: string, enterpriseProjectId?: string, recycleBackupId?: string, recycleStatus?: string, mode?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['ha_mode'] = haMode;
        this['engine_version'] = engineVersion;
        this['pay_model'] = payModel;
        this['created_at'] = createdAt;
        this['deleted_at'] = deletedAt;
        this['volume_type'] = volumeType;
        this['data_vip'] = dataVip;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['recycle_backup_id'] = recycleBackupId;
        this['recycle_status'] = recycleStatus;
        this['mode'] = mode;
    }
    public withId(id: string): RecycleInstancesDetailResultV1 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleInstancesDetailResultV1 {
        this['name'] = name;
        return this;
    }
    public withHaMode(haMode: RecycleInstancesDetailResultV1HaModeEnum | string): RecycleInstancesDetailResultV1 {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: RecycleInstancesDetailResultV1HaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): RecycleInstancesDetailResultV1HaModeEnum | string | undefined {
        return this['ha_mode'];
    }
    public withEngineName(engineName: string): RecycleInstancesDetailResultV1 {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): RecycleInstancesDetailResultV1 {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPayModel(payModel: RecycleInstancesDetailResultV1PayModelEnum | string): RecycleInstancesDetailResultV1 {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: RecycleInstancesDetailResultV1PayModelEnum | string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): RecycleInstancesDetailResultV1PayModelEnum | string | undefined {
        return this['pay_model'];
    }
    public withCreatedAt(createdAt: string): RecycleInstancesDetailResultV1 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDeletedAt(deletedAt: string): RecycleInstancesDetailResultV1 {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: string  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): string | undefined {
        return this['deleted_at'];
    }
    public withVolumeType(volumeType: RecycleInstancesDetailResultV1VolumeTypeEnum | string): RecycleInstancesDetailResultV1 {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: RecycleInstancesDetailResultV1VolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): RecycleInstancesDetailResultV1VolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: string): RecycleInstancesDetailResultV1 {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: string  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): string | undefined {
        return this['volume_size'];
    }
    public withDataVip(dataVip: string): RecycleInstancesDetailResultV1 {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleInstancesDetailResultV1 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): RecycleInstancesDetailResultV1 {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withBackupLevel(backupLevel: string): RecycleInstancesDetailResultV1 {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withRecycleBackupId(recycleBackupId: string): RecycleInstancesDetailResultV1 {
        this['recycle_backup_id'] = recycleBackupId;
        return this;
    }
    public set recycleBackupId(recycleBackupId: string  | undefined) {
        this['recycle_backup_id'] = recycleBackupId;
    }
    public get recycleBackupId(): string | undefined {
        return this['recycle_backup_id'];
    }
    public withRecycleStatus(recycleStatus: RecycleInstancesDetailResultV1RecycleStatusEnum | string): RecycleInstancesDetailResultV1 {
        this['recycle_status'] = recycleStatus;
        return this;
    }
    public set recycleStatus(recycleStatus: RecycleInstancesDetailResultV1RecycleStatusEnum | string  | undefined) {
        this['recycle_status'] = recycleStatus;
    }
    public get recycleStatus(): RecycleInstancesDetailResultV1RecycleStatusEnum | string | undefined {
        return this['recycle_status'];
    }
    public withMode(mode: RecycleInstancesDetailResultV1ModeEnum | string): RecycleInstancesDetailResultV1 {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultV1HaModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultV1PayModelEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultV1VolumeTypeEnum {
    HIGH = 'high',
    ULTRAHIGH = 'ultrahigh',
    ESSD = 'essd'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultV1RecycleStatusEnum {
    RUNNING = 'Running',
    ACTIVE = 'Active'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultV1ModeEnum {
    BASIC = 'basic',
    STANDARD = 'standard',
    ENTERPRISE = 'enterprise'
}
