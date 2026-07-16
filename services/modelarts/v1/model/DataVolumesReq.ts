

export class DataVolumesReq {
    public category?: DataVolumesReqCategoryEnum | string;
    private 'mount_path'?: string;
    public uri?: string;
    private 'efs_id'?: string;
    public constructor(category?: string, mountPath?: string, uri?: string) { 
        this['category'] = category;
        this['mount_path'] = mountPath;
        this['uri'] = uri;
    }
    public withCategory(category: DataVolumesReqCategoryEnum | string): DataVolumesReq {
        this['category'] = category;
        return this;
    }
    public withMountPath(mountPath: string): DataVolumesReq {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withUri(uri: string): DataVolumesReq {
        this['uri'] = uri;
        return this;
    }
    public withEfsId(efsId: string): DataVolumesReq {
        this['efs_id'] = efsId;
        return this;
    }
    public set efsId(efsId: string  | undefined) {
        this['efs_id'] = efsId;
    }
    public get efsId(): string | undefined {
        return this['efs_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataVolumesReqCategoryEnum {
    OBS = 'OBS',
    OBSFS = 'OBSFS',
    EFS = 'EFS'
}
