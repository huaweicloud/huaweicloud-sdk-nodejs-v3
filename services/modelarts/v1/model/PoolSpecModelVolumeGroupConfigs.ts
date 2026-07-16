import { PoolSpecModelVolumeGroupConfigsLvmConfig } from './PoolSpecModelVolumeGroupConfigsLvmConfig';


export class PoolSpecModelVolumeGroupConfigs {
    public volumeGroup?: string;
    public dockerThinPool?: number;
    public lvmConfig?: PoolSpecModelVolumeGroupConfigsLvmConfig;
    public constructor() { 
    }
    public withVolumeGroup(volumeGroup: string): PoolSpecModelVolumeGroupConfigs {
        this['volumeGroup'] = volumeGroup;
        return this;
    }
    public withDockerThinPool(dockerThinPool: number): PoolSpecModelVolumeGroupConfigs {
        this['dockerThinPool'] = dockerThinPool;
        return this;
    }
    public withLvmConfig(lvmConfig: PoolSpecModelVolumeGroupConfigsLvmConfig): PoolSpecModelVolumeGroupConfigs {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
}