

export class RecycleInstanceV3 {
    public id?: string;
    public name?: string;
    private 'ha_mode'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'pay_model'?: string;
    private 'create_at'?: number;
    private 'deleted_at'?: number;
    private 'volume_type'?: string;
    private 'volume_size'?: string;
    private 'data_vip'?: string;
    private 'data_vip_ipv6'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'backup_level'?: string;
    private 'recycle_backup_id'?: string;
    private 'recycle_status'?: string;
    public constructor() { 
    }
    public withId(id: string): RecycleInstanceV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleInstanceV3 {
        this['name'] = name;
        return this;
    }
    public withHaMode(haMode: string): RecycleInstanceV3 {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withEngineName(engineName: string): RecycleInstanceV3 {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): RecycleInstanceV3 {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPayModel(payModel: string): RecycleInstanceV3 {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withCreateAt(createAt: number): RecycleInstanceV3 {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDeletedAt(deletedAt: number): RecycleInstanceV3 {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: number  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): number | undefined {
        return this['deleted_at'];
    }
    public withVolumeType(volumeType: string): RecycleInstanceV3 {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: string): RecycleInstanceV3 {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: string  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): string | undefined {
        return this['volume_size'];
    }
    public withDataVip(dataVip: string): RecycleInstanceV3 {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withDataVipIpv6(dataVipIpv6: string): RecycleInstanceV3 {
        this['data_vip_ipv6'] = dataVipIpv6;
        return this;
    }
    public set dataVipIpv6(dataVipIpv6: string  | undefined) {
        this['data_vip_ipv6'] = dataVipIpv6;
    }
    public get dataVipIpv6(): string | undefined {
        return this['data_vip_ipv6'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleInstanceV3 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): RecycleInstanceV3 {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withBackupLevel(backupLevel: string): RecycleInstanceV3 {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withRecycleBackupId(recycleBackupId: string): RecycleInstanceV3 {
        this['recycle_backup_id'] = recycleBackupId;
        return this;
    }
    public set recycleBackupId(recycleBackupId: string  | undefined) {
        this['recycle_backup_id'] = recycleBackupId;
    }
    public get recycleBackupId(): string | undefined {
        return this['recycle_backup_id'];
    }
    public withRecycleStatus(recycleStatus: string): RecycleInstanceV3 {
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