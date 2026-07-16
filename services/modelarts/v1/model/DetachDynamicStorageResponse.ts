
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetachDynamicStorageResponse extends SdkResponse {
    public category?: DetachDynamicStorageResponseCategoryEnum | string;
    public id?: string;
    private 'mount_path'?: string;
    public status?: string;
    public uri?: string;
    private 'failure_reason'?: string;
    private 'efs_id'?: string;
    private 'mount_type'?: string;
    public constructor() { 
        super();
    }
    public withCategory(category: DetachDynamicStorageResponseCategoryEnum | string): DetachDynamicStorageResponse {
        this['category'] = category;
        return this;
    }
    public withId(id: string): DetachDynamicStorageResponse {
        this['id'] = id;
        return this;
    }
    public withMountPath(mountPath: string): DetachDynamicStorageResponse {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withStatus(status: string): DetachDynamicStorageResponse {
        this['status'] = status;
        return this;
    }
    public withUri(uri: string): DetachDynamicStorageResponse {
        this['uri'] = uri;
        return this;
    }
    public withFailureReason(failureReason: string): DetachDynamicStorageResponse {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
    public withEfsId(efsId: string): DetachDynamicStorageResponse {
        this['efs_id'] = efsId;
        return this;
    }
    public set efsId(efsId: string  | undefined) {
        this['efs_id'] = efsId;
    }
    public get efsId(): string | undefined {
        return this['efs_id'];
    }
    public withMountType(mountType: string): DetachDynamicStorageResponse {
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
export enum DetachDynamicStorageResponseCategoryEnum {
    OBS = 'OBS',
    OBSFS = 'OBSFS',
    EFS = 'EFS'
}
