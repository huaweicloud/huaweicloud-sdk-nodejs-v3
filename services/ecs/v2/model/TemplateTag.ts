

export class TemplateTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): TemplateTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TemplateTag {
        this['value'] = value;
        return this;
    }
}