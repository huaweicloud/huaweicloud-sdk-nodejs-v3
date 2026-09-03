

export class CountResourceInstancesReqMatches {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CountResourceInstancesReqMatches {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CountResourceInstancesReqMatches {
        this['value'] = value;
        return this;
    }
}