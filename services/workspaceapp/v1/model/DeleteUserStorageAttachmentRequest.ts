import { DeleteUserStorageAttachmentReq } from './DeleteUserStorageAttachmentReq';


export class DeleteUserStorageAttachmentRequest {
    private 'storage_id'?: string;
    public body?: DeleteUserStorageAttachmentReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): DeleteUserStorageAttachmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: DeleteUserStorageAttachmentReq): DeleteUserStorageAttachmentRequest {
        this['body'] = body;
        return this;
    }
}