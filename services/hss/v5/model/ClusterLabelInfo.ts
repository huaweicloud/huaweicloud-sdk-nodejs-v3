

export class ClusterLabelInfo {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ClusterLabelInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ClusterLabelInfo {
        this['value'] = value;
        return this;
    }
}