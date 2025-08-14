import { UpdateUserFolderReq } from './UpdateUserFolderReq';


export class UpdateCloudUserFolderAssignmentRequest {
    private 'storage_id'?: string;
    private 'cloud_assignment_id'?: string;
    public body?: UpdateUserFolderReq;
    public constructor(storageId?: string, cloudAssignmentId?: string) { 
        this['storage_id'] = storageId;
        this['cloud_assignment_id'] = cloudAssignmentId;
    }
    public withStorageId(storageId: string): UpdateCloudUserFolderAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withCloudAssignmentId(cloudAssignmentId: string): UpdateCloudUserFolderAssignmentRequest {
        this['cloud_assignment_id'] = cloudAssignmentId;
        return this;
    }
    public set cloudAssignmentId(cloudAssignmentId: string  | undefined) {
        this['cloud_assignment_id'] = cloudAssignmentId;
    }
    public get cloudAssignmentId(): string | undefined {
        return this['cloud_assignment_id'];
    }
    public withBody(body: UpdateUserFolderReq): UpdateCloudUserFolderAssignmentRequest {
        this['body'] = body;
        return this;
    }
}