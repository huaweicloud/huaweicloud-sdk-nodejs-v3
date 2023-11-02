

export class AttributeSearchResult {
    public name?: Array<string>;
    public values?: Array<object>;
    public constructor() { 
    }
    public withName(name: Array<string>): AttributeSearchResult {
        this['name'] = name;
        return this;
    }
    public withValues(values: Array<object>): AttributeSearchResult {
        this['values'] = values;
        return this;
    }
}