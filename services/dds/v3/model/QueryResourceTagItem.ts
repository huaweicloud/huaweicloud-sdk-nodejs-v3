

export class QueryResourceTagItem {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): QueryResourceTagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): QueryResourceTagItem {
        this['value'] = value;
        return this;
    }
}