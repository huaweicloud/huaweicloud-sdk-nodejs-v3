

export class VolumeRes {
    public capacity?: number;
    public category?: string;
    private 'mount_path'?: string;
    public ownership?: string;
    public status?: VolumeResStatusEnum | string;
    public id?: string;
    private 'read_only'?: boolean;
    private 'dew_secret_name'?: string;
    private 'evs_sku_code'?: string;
    public uri?: string;
    private 'mount_type'?: string;
    public constructor() { 
    }
    public withCapacity(capacity: number): VolumeRes {
        this['capacity'] = capacity;
        return this;
    }
    public withCategory(category: string): VolumeRes {
        this['category'] = category;
        return this;
    }
    public withMountPath(mountPath: string): VolumeRes {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withOwnership(ownership: string): VolumeRes {
        this['ownership'] = ownership;
        return this;
    }
    public withStatus(status: VolumeResStatusEnum | string): VolumeRes {
        this['status'] = status;
        return this;
    }
    public withId(id: string): VolumeRes {
        this['id'] = id;
        return this;
    }
    public withReadOnly(readOnly: boolean): VolumeRes {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withDewSecretName(dewSecretName: string): VolumeRes {
        this['dew_secret_name'] = dewSecretName;
        return this;
    }
    public set dewSecretName(dewSecretName: string  | undefined) {
        this['dew_secret_name'] = dewSecretName;
    }
    public get dewSecretName(): string | undefined {
        return this['dew_secret_name'];
    }
    public withEvsSkuCode(evsSkuCode: string): VolumeRes {
        this['evs_sku_code'] = evsSkuCode;
        return this;
    }
    public set evsSkuCode(evsSkuCode: string  | undefined) {
        this['evs_sku_code'] = evsSkuCode;
    }
    public get evsSkuCode(): string | undefined {
        return this['evs_sku_code'];
    }
    public withUri(uri: string): VolumeRes {
        this['uri'] = uri;
        return this;
    }
    public withMountType(mountType: string): VolumeRes {
        this['mount_type'] = mountType;
        return this;
    }
    public set mountType(mountType: string  | undefined) {
        this['mount_type'] = mountType;
    }
    public get mountType(): string | undefined {
        return this['mount_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeResStatusEnum {
    DELETED = 'DELETED',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETING = 'DELETING',
    IN_USE = 'IN_USE',
    MOUNTED = 'MOUNTED',
    MOUNTING = 'MOUNTING',
    MOUNT_FAILED = 'MOUNT_FAILED',
    RESIZING = 'RESIZING',
    UNMOUNTED = 'UNMOUNTED',
    UNMOUNTING = 'UNMOUNTING',
    UNMOUNT_FAILED = 'UNMOUNT_FAILED'
}
