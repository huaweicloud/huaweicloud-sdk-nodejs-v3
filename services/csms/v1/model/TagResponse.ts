

export class TagResponse {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): TagResponse {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): TagResponse {
        this['values'] = values;
        return this;
    }
}