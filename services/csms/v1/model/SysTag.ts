

export class SysTag {
    public key?: string;
    public values?: string;
    public constructor() { 
    }
    public withKey(key: string): SysTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: string): SysTag {
        this['values'] = values;
        return this;
    }
}