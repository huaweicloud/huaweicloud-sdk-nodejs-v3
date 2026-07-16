

export class VolumeMountRequest {
    public category?: VolumeMountRequestCategoryEnum | string;
    public ownership?: VolumeMountRequestOwnershipEnum | string;
    public uri?: string;
    public id?: string;
    private 'mount_path'?: string;
    private 'read_only'?: boolean;
    private 'dew_secret_name'?: string;
    public capacity?: number;
    public constructor(category?: string, ownership?: string) { 
        this['category'] = category;
        this['ownership'] = ownership;
    }
    public withCategory(category: VolumeMountRequestCategoryEnum | string): VolumeMountRequest {
        this['category'] = category;
        return this;
    }
    public withOwnership(ownership: VolumeMountRequestOwnershipEnum | string): VolumeMountRequest {
        this['ownership'] = ownership;
        return this;
    }
    public withUri(uri: string): VolumeMountRequest {
        this['uri'] = uri;
        return this;
    }
    public withId(id: string): VolumeMountRequest {
        this['id'] = id;
        return this;
    }
    public withMountPath(mountPath: string): VolumeMountRequest {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withReadOnly(readOnly: boolean): VolumeMountRequest {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withDewSecretName(dewSecretName: string): VolumeMountRequest {
        this['dew_secret_name'] = dewSecretName;
        return this;
    }
    public set dewSecretName(dewSecretName: string  | undefined) {
        this['dew_secret_name'] = dewSecretName;
    }
    public get dewSecretName(): string | undefined {
        return this['dew_secret_name'];
    }
    public withCapacity(capacity: number): VolumeMountRequest {
        this['capacity'] = capacity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeMountRequestCategoryEnum {
    OBS = 'OBS',
    OBSFS = 'OBSFS',
    EFS = 'EFS'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeMountRequestOwnershipEnum {
    MANAGED = 'MANAGED',
    DEDICATED = 'DEDICATED'
}
