

export class ResetUserProfileReq {
    private 'cloud_storage_assignment_id'?: string;
    private 'ori_name'?: string;
    public constructor(cloudStorageAssignmentId?: string) { 
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
    }
    public withCloudStorageAssignmentId(cloudStorageAssignmentId: string): ResetUserProfileReq {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
        return this;
    }
    public set cloudStorageAssignmentId(cloudStorageAssignmentId: string  | undefined) {
        this['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
    }
    public get cloudStorageAssignmentId(): string | undefined {
        return this['cloud_storage_assignment_id'];
    }
    public withOriName(oriName: string): ResetUserProfileReq {
        this['ori_name'] = oriName;
        return this;
    }
    public set oriName(oriName: string  | undefined) {
        this['ori_name'] = oriName;
    }
    public get oriName(): string | undefined {
        return this['ori_name'];
    }
}