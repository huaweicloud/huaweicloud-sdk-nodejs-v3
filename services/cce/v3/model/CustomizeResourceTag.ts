

export class CustomizeResourceTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): CustomizeResourceTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): CustomizeResourceTag {
        this['values'] = values;
        return this;
    }
}