

export class AttachServerAppReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): AttachServerAppReq {
        this['items'] = items;
        return this;
    }
}