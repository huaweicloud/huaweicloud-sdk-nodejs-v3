

export class RecycleInstsanceV3 {
    public id?: string;
    public name?: string;
    private 'ha_mode'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'pay_model'?: string;
    private 'created_at'?: string;
    private 'deleted_at'?: string;
    private 'volume_type'?: string;
    private 'volume_size'?: number;
    private 'data_vip'?: string;
    private 'data_vip_v6'?: string;
    private 'enterprise_project_id'?: string;
    private 'retained_until'?: string;
    private 'recycle_backup_id'?: string;
    private 'recycle_status'?: string;
    public constructor() { 
    }
    public withId(id: string): RecycleInstsanceV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleInstsanceV3 {
        this['name'] = name;
        return this;
    }
    public withHaMode(haMode: string): RecycleInstsanceV3 {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withEngineName(engineName: string): RecycleInstsanceV3 {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): RecycleInstsanceV3 {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPayModel(payModel: string): RecycleInstsanceV3 {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withCreatedAt(createdAt: string): RecycleInstsanceV3 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDeletedAt(deletedAt: string): RecycleInstsanceV3 {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: string  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): string | undefined {
        return this['deleted_at'];
    }
    public withVolumeType(volumeType: string): RecycleInstsanceV3 {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: number): RecycleInstsanceV3 {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withDataVip(dataVip: string): RecycleInstsanceV3 {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withDataVipV6(dataVipV6: string): RecycleInstsanceV3 {
        this['data_vip_v6'] = dataVipV6;
        return this;
    }
    public set dataVipV6(dataVipV6: string  | undefined) {
        this['data_vip_v6'] = dataVipV6;
    }
    public get dataVipV6(): string | undefined {
        return this['data_vip_v6'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleInstsanceV3 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRetainedUntil(retainedUntil: string): RecycleInstsanceV3 {
        this['retained_until'] = retainedUntil;
        return this;
    }
    public set retainedUntil(retainedUntil: string  | undefined) {
        this['retained_until'] = retainedUntil;
    }
    public get retainedUntil(): string | undefined {
        return this['retained_until'];
    }
    public withRecycleBackupId(recycleBackupId: string): RecycleInstsanceV3 {
        this['recycle_backup_id'] = recycleBackupId;
        return this;
    }
    public set recycleBackupId(recycleBackupId: string  | undefined) {
        this['recycle_backup_id'] = recycleBackupId;
    }
    public get recycleBackupId(): string | undefined {
        return this['recycle_backup_id'];
    }
    public withRecycleStatus(recycleStatus: string): RecycleInstsanceV3 {
        this['recycle_status'] = recycleStatus;
        return this;
    }
    public set recycleStatus(recycleStatus: string  | undefined) {
        this['recycle_status'] = recycleStatus;
    }
    public get recycleStatus(): string | undefined {
        return this['recycle_status'];
    }
}