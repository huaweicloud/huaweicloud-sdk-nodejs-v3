

export class BatchDeleteCloudStorageReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteCloudStorageReq {
        this['items'] = items;
        return this;
    }
}