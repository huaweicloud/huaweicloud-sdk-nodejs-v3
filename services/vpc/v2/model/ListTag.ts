

export class ListTag {
    public key: string;
    public values: Array<string>;
    public constructor(key?: any, values?: any) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ListTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ListTag {
        this['values'] = values;
        return this;
    }
}