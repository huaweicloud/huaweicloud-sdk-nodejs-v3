import { CreateShareFolderReq } from './CreateShareFolderReq';


export class CreateShareFolderRequest {
    private 'storage_id'?: string;
    public body?: CreateShareFolderReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): CreateShareFolderRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: CreateShareFolderReq): CreateShareFolderRequest {
        this['body'] = body;
        return this;
    }
}