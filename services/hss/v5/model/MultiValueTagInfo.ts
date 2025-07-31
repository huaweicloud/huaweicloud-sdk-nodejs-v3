

export class MultiValueTagInfo {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): MultiValueTagInfo {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): MultiValueTagInfo {
        this['values'] = values;
        return this;
    }
}