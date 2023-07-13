

export class TagWithMultiValue {
    public key: string;
    public values?: Array<string>;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): TagWithMultiValue {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagWithMultiValue {
        this['values'] = values;
        return this;
    }
}