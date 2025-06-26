import { AssignShareFolderReq } from './AssignShareFolderReq';


export class UpdateShareFolderAssignmentRequest {
    private 'storage_id'?: string;
    public body?: AssignShareFolderReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): UpdateShareFolderAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: AssignShareFolderReq): UpdateShareFolderAssignmentRequest {
        this['body'] = body;
        return this;
    }
}