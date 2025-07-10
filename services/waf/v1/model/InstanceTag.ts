

export class InstanceTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): InstanceTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): InstanceTag {
        this['values'] = values;
        return this;
    }
}