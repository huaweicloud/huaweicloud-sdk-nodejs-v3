

export class DssPoolInfo {
    private 'az_name'?: string;
    private 'free_capacity_gb'?: string;
    private 'dsspool_volume_type'?: string;
    private 'dsspool_id'?: string;
    private 'dsspool_status'?: string;
    public constructor(azName?: string, freeCapacityGb?: string, dsspoolVolumeType?: string, dsspoolId?: string, dsspoolStatus?: string) { 
        this['az_name'] = azName;
        this['free_capacity_gb'] = freeCapacityGb;
        this['dsspool_volume_type'] = dsspoolVolumeType;
        this['dsspool_id'] = dsspoolId;
        this['dsspool_status'] = dsspoolStatus;
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
    public withDsspoolVolumeType(dsspoolVolumeType: string): DssPoolInfo {
        this['dsspool_volume_type'] = dsspoolVolumeType;
        return this;
    }
    public set dsspoolVolumeType(dsspoolVolumeType: string  | undefined) {
        this['dsspool_volume_type'] = dsspoolVolumeType;
    }
    public get dsspoolVolumeType(): string | undefined {
        return this['dsspool_volume_type'];
    }
    public withDsspoolId(dsspoolId: string): DssPoolInfo {
        this['dsspool_id'] = dsspoolId;
        return this;
    }
    public set dsspoolId(dsspoolId: string  | undefined) {
        this['dsspool_id'] = dsspoolId;
    }
    public get dsspoolId(): string | undefined {
        return this['dsspool_id'];
    }
    public withDsspoolStatus(dsspoolStatus: string): DssPoolInfo {
        this['dsspool_status'] = dsspoolStatus;
        return this;
    }
    public set dsspoolStatus(dsspoolStatus: string  | undefined) {
        this['dsspool_status'] = dsspoolStatus;
    }
    public get dsspoolStatus(): string | undefined {
        return this['dsspool_status'];
    }
}