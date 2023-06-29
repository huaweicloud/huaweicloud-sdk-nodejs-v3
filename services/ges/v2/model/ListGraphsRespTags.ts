

export class ListGraphsRespTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ListGraphsRespTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListGraphsRespTags {
        this['value'] = value;
        return this;
    }
}