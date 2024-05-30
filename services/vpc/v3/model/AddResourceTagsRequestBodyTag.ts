

export class AddResourceTagsRequestBodyTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): AddResourceTagsRequestBodyTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AddResourceTagsRequestBodyTag {
        this['value'] = value;
        return this;
    }
}