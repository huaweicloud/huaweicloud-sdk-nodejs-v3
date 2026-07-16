

export class VolumeResponse {
    public category?: VolumeResponseCategoryEnum | string;
    private 'mount_path'?: string;
    public url?: string;
    public status?: VolumeResponseStatusEnum | string;
    private 'mount_type'?: VolumeResponseMountTypeEnum | string;
    public constructor() { 
    }
    public withCategory(category: VolumeResponseCategoryEnum | string): VolumeResponse {
        this['category'] = category;
        return this;
    }
    public withMountPath(mountPath: string): VolumeResponse {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withUrl(url: string): VolumeResponse {
        this['url'] = url;
        return this;
    }
    public withStatus(status: VolumeResponseStatusEnum | string): VolumeResponse {
        this['status'] = status;
        return this;
    }
    public withMountType(mountType: VolumeResponseMountTypeEnum | string): VolumeResponse {
        this['mount_type'] = mountType;
        return this;
    }
    public set mountType(mountType: VolumeResponseMountTypeEnum | string  | undefined) {
        this['mount_type'] = mountType;
    }
    public get mountType(): VolumeResponseMountTypeEnum | string | undefined {
        return this['mount_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeResponseCategoryEnum {
    OBS = 'OBS',
    OBSFS = 'OBSFS',
    EFS = 'EFS'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeResponseStatusEnum {
    MOUNTING = 'MOUNTING',
    MOUNTED = 'MOUNTED',
    UNMOUNTING = 'UNMOUNTING',
    UNMOUNTED = 'UNMOUNTED',
    MOUNT_FAILED = 'MOUNT_FAILED',
    UNMOUNT_FAILED = 'UNMOUNT_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeResponseMountTypeEnum {
    STATIC = 'STATIC',
    DYNAMIC = 'DYNAMIC'
}
