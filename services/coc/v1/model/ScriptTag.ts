

export class ScriptTag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ScriptTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ScriptTag {
        this['values'] = values;
        return this;
    }
}