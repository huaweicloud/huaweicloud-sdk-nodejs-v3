

export class BulkCreateAndDeleteTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): BulkCreateAndDeleteTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BulkCreateAndDeleteTags {
        this['value'] = value;
        return this;
    }
}