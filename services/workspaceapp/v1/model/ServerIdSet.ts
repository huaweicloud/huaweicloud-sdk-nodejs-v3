

export class ServerIdSet {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): ServerIdSet {
        this['items'] = items;
        return this;
    }
}