

export class PoolSpecModelVolumeGroupConfigsLvmConfig {
    public lvType?: string;
    public constructor() { 
    }
    public withLvType(lvType: string): PoolSpecModelVolumeGroupConfigsLvmConfig {
        this['lvType'] = lvType;
        return this;
    }
}