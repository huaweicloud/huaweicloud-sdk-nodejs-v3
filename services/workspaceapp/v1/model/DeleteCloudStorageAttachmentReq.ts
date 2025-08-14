

export class DeleteCloudStorageAttachmentReq {
    public items?: Array<string>;
    public constructor() { 
    }
    public withItems(items: Array<string>): DeleteCloudStorageAttachmentReq {
        this['items'] = items;
        return this;
    }
}