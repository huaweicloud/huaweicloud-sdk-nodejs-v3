

export class DssPoolInfo {
    private 'az_name'?: string;
    private 'free_capacity_gb'?: string;
    private 'dss_pool_volume_type'?: string;
    private 'dss_pool_id'?: string;
    private 'dss_pool_status'?: string;
    public constructor(azName?: string, freeCapacityGb?: string, dssPoolVolumeType?: string, dssPoolId?: string, dssPoolStatus?: string) { 
        this['az_name'] = azName;
        this['free_capacity_gb'] = freeCapacityGb;
        this['dss_pool_volume_type'] = dssPoolVolumeType;
        this['dss_pool_id'] = dssPoolId;
        this['dss_pool_status'] = dssPoolStatus;
    }
    public withAzName(azName: string): DssPoolInfo {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string  | undefined) {
        this['az_name'] = azName;
    }
    public get azName(): string | undefined {
        return this['az_name'];
    }
    public withFreeCapacityGb(freeCapacityGb: string): DssPoolInfo {
        this['free_capacity_gb'] = freeCapacityGb;
        return this;
    }
    public set freeCapacityGb(freeCapacityGb: string  | undefined) {
        this['free_capacity_gb'] = freeCapacityGb;
    }
    public get freeCapacityGb(): string | undefined {
        return this['free_capacity_gb'];
    }
    public withDssPoolVolumeType(dssPoolVolumeType: string): DssPoolInfo {
        this['dss_pool_volume_type'] = dssPoolVolumeType;
        return this;
    }
    public set dssPoolVolumeType(dssPoolVolumeType: string  | undefined) {
        this['dss_pool_volume_type'] = dssPoolVolumeType;
    }
    public get dssPoolVolumeType(): string | undefined {
        return this['dss_pool_volume_type'];
    }
    public withDssPoolId(dssPoolId: string): DssPoolInfo {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string  | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId(): string | undefined {
        return this['dss_pool_id'];
    }
    public withDssPoolStatus(dssPoolStatus: string): DssPoolInfo {
        this['dss_pool_status'] = dssPoolStatus;
        return this;
    }
    public set dssPoolStatus(dssPoolStatus: string  | undefined) {
        this['dss_pool_status'] = dssPoolStatus;
    }
    public get dssPoolStatus(): string | undefined {
        return this['dss_pool_status'];
    }
}