import { VolumeConfigurationMountInfo } from './VolumeConfigurationMountInfo';


export class VolumeConfigurationDataVolume {
    private 'volume_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: VolumeConfigurationDataVolumeResourceTypeEnum | string;
    private 'resource_sub_type'?: VolumeConfigurationDataVolumeResourceSubTypeEnum | string;
    public umask?: string;
    private 'mount_info'?: Array<VolumeConfigurationMountInfo>;
    public constructor() { 
    }
    public withVolumeId(volumeId: string): VolumeConfigurationDataVolume {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withResourceName(resourceName: string): VolumeConfigurationDataVolume {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: VolumeConfigurationDataVolumeResourceTypeEnum | string): VolumeConfigurationDataVolume {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: VolumeConfigurationDataVolumeResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): VolumeConfigurationDataVolumeResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceSubType(resourceSubType: VolumeConfigurationDataVolumeResourceSubTypeEnum | string): VolumeConfigurationDataVolume {
        this['resource_sub_type'] = resourceSubType;
        return this;
    }
    public set resourceSubType(resourceSubType: VolumeConfigurationDataVolumeResourceSubTypeEnum | string  | undefined) {
        this['resource_sub_type'] = resourceSubType;
    }
    public get resourceSubType(): VolumeConfigurationDataVolumeResourceSubTypeEnum | string | undefined {
        return this['resource_sub_type'];
    }
    public withUmask(umask: string): VolumeConfigurationDataVolume {
        this['umask'] = umask;
        return this;
    }
    public withMountInfo(mountInfo: Array<VolumeConfigurationMountInfo>): VolumeConfigurationDataVolume {
        this['mount_info'] = mountInfo;
        return this;
    }
    public set mountInfo(mountInfo: Array<VolumeConfigurationMountInfo>  | undefined) {
        this['mount_info'] = mountInfo;
    }
    public get mountInfo(): Array<VolumeConfigurationMountInfo> | undefined {
        return this['mount_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeConfigurationDataVolumeResourceTypeEnum {
    OBS = 'obs',
    SFS = 'sfs'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeConfigurationDataVolumeResourceSubTypeEnum {
    OBJECT_BUCKET = 'object_bucket',
    PARALLEL_FILE_SYSTEM = 'parallel_file_system',
    SFS3_0 = 'sfs3.0'
}
