

export class RecycleInstancesDetailResult {
    public id?: string;
    public name?: string;
    private 'ha_mode'?: RecycleInstancesDetailResultHaModeEnum | string;
    private 'engine_version'?: string;
    private 'pay_model'?: RecycleInstancesDetailResultPayModelEnum | string;
    private 'created_at'?: string;
    private 'deleted_at'?: string;
    private 'volume_type'?: RecycleInstancesDetailResultVolumeTypeEnum | string;
    private 'data_vip'?: string;
    private 'enterprise_project_id'?: string;
    private 'recycle_backup_id'?: string;
    private 'recycle_status'?: RecycleInstancesDetailResultRecycleStatusEnum | string;
    public mode?: RecycleInstancesDetailResultModeEnum | string;
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
    public withId(id: string): RecycleInstancesDetailResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleInstancesDetailResult {
        this['name'] = name;
        return this;
    }
    public withHaMode(haMode: RecycleInstancesDetailResultHaModeEnum | string): RecycleInstancesDetailResult {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: RecycleInstancesDetailResultHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): RecycleInstancesDetailResultHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
    public withEngineVersion(engineVersion: string): RecycleInstancesDetailResult {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPayModel(payModel: RecycleInstancesDetailResultPayModelEnum | string): RecycleInstancesDetailResult {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: RecycleInstancesDetailResultPayModelEnum | string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): RecycleInstancesDetailResultPayModelEnum | string | undefined {
        return this['pay_model'];
    }
    public withCreatedAt(createdAt: string): RecycleInstancesDetailResult {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDeletedAt(deletedAt: string): RecycleInstancesDetailResult {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: string  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): string | undefined {
        return this['deleted_at'];
    }
    public withVolumeType(volumeType: RecycleInstancesDetailResultVolumeTypeEnum | string): RecycleInstancesDetailResult {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: RecycleInstancesDetailResultVolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): RecycleInstancesDetailResultVolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withDataVip(dataVip: string): RecycleInstancesDetailResult {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleInstancesDetailResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRecycleBackupId(recycleBackupId: string): RecycleInstancesDetailResult {
        this['recycle_backup_id'] = recycleBackupId;
        return this;
    }
    public set recycleBackupId(recycleBackupId: string  | undefined) {
        this['recycle_backup_id'] = recycleBackupId;
    }
    public get recycleBackupId(): string | undefined {
        return this['recycle_backup_id'];
    }
    public withRecycleStatus(recycleStatus: RecycleInstancesDetailResultRecycleStatusEnum | string): RecycleInstancesDetailResult {
        this['recycle_status'] = recycleStatus;
        return this;
    }
    public set recycleStatus(recycleStatus: RecycleInstancesDetailResultRecycleStatusEnum | string  | undefined) {
        this['recycle_status'] = recycleStatus;
    }
    public get recycleStatus(): RecycleInstancesDetailResultRecycleStatusEnum | string | undefined {
        return this['recycle_status'];
    }
    public withMode(mode: RecycleInstancesDetailResultModeEnum | string): RecycleInstancesDetailResult {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultHaModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultPayModelEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultVolumeTypeEnum {
    HIGH = 'high',
    ULTRAHIGH = 'ultrahigh',
    ESSD = 'essd'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultRecycleStatusEnum {
    RUNNING = 'Running',
    ACTIVE = 'Active'
}
/**
    * @export
    * @enum {string}
    */
export enum RecycleInstancesDetailResultModeEnum {
    BASIC = 'basic',
    STANDARD = 'standard',
    ENTERPRISE = 'enterprise'
}
