

export class DeleteUserStorageAttachmentReq {
    public items?: Array<string>;
    public constructor() { 
    }
    public withItems(items: Array<string>): DeleteUserStorageAttachmentReq {
        this['items'] = items;
        return this;
    }
}