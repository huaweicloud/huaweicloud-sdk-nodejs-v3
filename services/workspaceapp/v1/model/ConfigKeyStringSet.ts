

export class ConfigKeyStringSet {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): ConfigKeyStringSet {
        this['items'] = items;
        return this;
    }
}