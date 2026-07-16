

export class PoolSpecModelDataVolumesExtendParams {
    public billing?: string;
    public volumeGroup?: string;
    public constructor() { 
    }
    public withBilling(billing: string): PoolSpecModelDataVolumesExtendParams {
        this['billing'] = billing;
        return this;
    }
    public withVolumeGroup(volumeGroup: string): PoolSpecModelDataVolumesExtendParams {
        this['volumeGroup'] = volumeGroup;
        return this;
    }
}