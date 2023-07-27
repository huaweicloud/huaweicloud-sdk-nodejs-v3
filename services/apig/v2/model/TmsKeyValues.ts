

export class TmsKeyValues {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TmsKeyValues {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TmsKeyValues {
        this['values'] = values;
        return this;
    }
}