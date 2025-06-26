import { AssignUserFolderReq } from './AssignUserFolderReq';


export class UpdateUserFolderAssignmentRequest {
    private 'storage_id'?: string;
    public body?: AssignUserFolderReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): UpdateUserFolderAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: AssignUserFolderReq): UpdateUserFolderAssignmentRequest {
        this['body'] = body;
        return this;
    }
}