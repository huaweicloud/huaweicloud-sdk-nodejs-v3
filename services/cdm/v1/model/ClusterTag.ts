

export class ClusterTag {
    public value?: string;
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withValue(value: string): ClusterTag {
        this['value'] = value;
        return this;
    }
    public withKey(key: string): ClusterTag {
        this['key'] = key;
        return this;
    }
}