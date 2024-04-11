

export class TagsResultData {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): TagsResultData {
        this['value'] = value;
        return this;
    }
}