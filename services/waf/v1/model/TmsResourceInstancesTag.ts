

export class TmsResourceInstancesTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TmsResourceInstancesTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TmsResourceInstancesTag {
        this['values'] = values;
        return this;
    }
}