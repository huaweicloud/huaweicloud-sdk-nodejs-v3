

export class ScrumCustomField {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ScrumCustomField {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ScrumCustomField {
        this['value'] = value;
        return this;
    }
}