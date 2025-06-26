

export class BatchDeletePersistentStorageReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeletePersistentStorageReq {
        this['items'] = items;
        return this;
    }
}