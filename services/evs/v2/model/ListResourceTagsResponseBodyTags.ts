

export class ListResourceTagsResponseBodyTags {
    public key?: string;
    public value?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ListResourceTagsResponseBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): ListResourceTagsResponseBodyTags {
        this['value'] = value;
        return this;
    }
}