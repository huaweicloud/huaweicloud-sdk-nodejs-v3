

export class TmsTagValues {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TmsTagValues {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TmsTagValues {
        this['values'] = values;
        return this;
    }
}