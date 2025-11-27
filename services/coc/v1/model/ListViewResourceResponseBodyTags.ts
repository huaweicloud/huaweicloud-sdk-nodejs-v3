

export class ListViewResourceResponseBodyTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ListViewResourceResponseBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListViewResourceResponseBodyTags {
        this['value'] = value;
        return this;
    }
}