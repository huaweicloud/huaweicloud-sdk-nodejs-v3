import { CreateUserFolderReq } from './CreateUserFolderReq';


export class CreateUserFolderAssignmentRequest {
    private 'storage_id'?: string;
    public body?: CreateUserFolderReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): CreateUserFolderAssignmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: CreateUserFolderReq): CreateUserFolderAssignmentRequest {
        this['body'] = body;
        return this;
    }
}