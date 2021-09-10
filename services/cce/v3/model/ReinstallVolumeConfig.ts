import { Storage } from './Storage';


export class ReinstallVolumeConfig {
    public lvmConfig?: string;
    public storage?: Storage;
    public constructor() { 
    }
    public withLvmConfig(lvmConfig: string): ReinstallVolumeConfig {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
    public withStorage(storage: Storage): ReinstallVolumeConfig {
        this['storage'] = storage;
        return this;
    }
}