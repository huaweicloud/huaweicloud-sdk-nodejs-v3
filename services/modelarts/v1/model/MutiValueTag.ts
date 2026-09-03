

export class MutiValueTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): MutiValueTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): MutiValueTag {
        this['values'] = values;
        return this;
    }
}