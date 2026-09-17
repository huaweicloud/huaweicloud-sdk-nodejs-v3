

export class VolumeConfig {
    public volumeResetPolicy?: VolumeConfigVolumeResetPolicyEnum | string;
    public constructor() { 
    }
    public withVolumeResetPolicy(volumeResetPolicy: VolumeConfigVolumeResetPolicyEnum | string): VolumeConfig {
        this['volumeResetPolicy'] = volumeResetPolicy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeConfigVolumeResetPolicyEnum {
    RESET_MANAGED_VOLUMES = 'reset_managed_volumes',
    RETAIN_CUSTOM_VOLUMES = 'retain_custom_volumes'
}
