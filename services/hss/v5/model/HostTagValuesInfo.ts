

export class HostTagValuesInfo {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): HostTagValuesInfo {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): HostTagValuesInfo {
        this['values'] = values;
        return this;
    }
}