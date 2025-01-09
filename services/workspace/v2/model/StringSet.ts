

export class StringSet {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): StringSet {
        this['items'] = items;
        return this;
    }
}