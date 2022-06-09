

export class ActionTag {
    public key: string;
    public values?: Array<string>;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): ActionTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ActionTag {
        this['values'] = values;
        return this;
    }
}