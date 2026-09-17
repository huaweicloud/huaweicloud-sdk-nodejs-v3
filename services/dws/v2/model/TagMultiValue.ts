

export class TagMultiValue {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagMultiValue {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagMultiValue {
        this['values'] = values;
        return this;
    }
}