import { LvmConfig } from './LvmConfig';


export class VolumeGroupConfig {
    public volumeGroup?: string;
    public dockerThinPool?: number;
    public lvmConfig?: LvmConfig;
    public types?: Array<string>;
    public constructor(volumeGroup?: string) { 
        this['volumeGroup'] = volumeGroup;
    }
    public withVolumeGroup(volumeGroup: string): VolumeGroupConfig {
        this['volumeGroup'] = volumeGroup;
        return this;
    }
    public withDockerThinPool(dockerThinPool: number): VolumeGroupConfig {
        this['dockerThinPool'] = dockerThinPool;
        return this;
    }
    public withLvmConfig(lvmConfig: LvmConfig): VolumeGroupConfig {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
    public withTypes(types: Array<string>): VolumeGroupConfig {
        this['types'] = types;
        return this;
    }
}