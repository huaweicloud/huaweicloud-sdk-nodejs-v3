

export class VolumeConfigurationMountInfo {
    public path?: string;
    private 'sub_path'?: string;
    private 'access_mode'?: VolumeConfigurationMountInfoAccessModeEnum | string;
    public constructor() { 
    }
    public withPath(path: string): VolumeConfigurationMountInfo {
        this['path'] = path;
        return this;
    }
    public withSubPath(subPath: string): VolumeConfigurationMountInfo {
        this['sub_path'] = subPath;
        return this;
    }
    public set subPath(subPath: string  | undefined) {
        this['sub_path'] = subPath;
    }
    public get subPath(): string | undefined {
        return this['sub_path'];
    }
    public withAccessMode(accessMode: VolumeConfigurationMountInfoAccessModeEnum | string): VolumeConfigurationMountInfo {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: VolumeConfigurationMountInfoAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): VolumeConfigurationMountInfoAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeConfigurationMountInfoAccessModeEnum {
    READWRITEMANY = 'ReadWriteMany',
    READONLYMANY = 'ReadOnlyMany'
}
