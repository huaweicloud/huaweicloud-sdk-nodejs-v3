import { Storage } from './Storage';


export class ReinstallVolumeConfig {
    public lvmConfig?: string;
    public storage?: Storage;
    public volumeResetPolicy?: ReinstallVolumeConfigVolumeResetPolicyEnum | string;
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
    public withVolumeResetPolicy(volumeResetPolicy: ReinstallVolumeConfigVolumeResetPolicyEnum | string): ReinstallVolumeConfig {
        this['volumeResetPolicy'] = volumeResetPolicy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReinstallVolumeConfigVolumeResetPolicyEnum {
    RESET_MANAGED_VOLUMES = 'reset_managed_volumes',
    RETAIN_CUSTOM_VOLUMES = 'retain_custom_volumes'
}
