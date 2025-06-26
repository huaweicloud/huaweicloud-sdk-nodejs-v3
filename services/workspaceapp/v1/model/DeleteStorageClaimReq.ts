

export class DeleteStorageClaimReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): DeleteStorageClaimReq {
        this['items'] = items;
        return this;
    }
}