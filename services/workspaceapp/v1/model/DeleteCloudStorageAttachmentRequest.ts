import { DeleteCloudStorageAttachmentReq } from './DeleteCloudStorageAttachmentReq';


export class DeleteCloudStorageAttachmentRequest {
    private 'storage_id'?: string;
    public body?: DeleteCloudStorageAttachmentReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): DeleteCloudStorageAttachmentRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: DeleteCloudStorageAttachmentReq): DeleteCloudStorageAttachmentRequest {
        this['body'] = body;
        return this;
    }
}