

export class WorkspaceTag {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): WorkspaceTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): WorkspaceTag {
        this['values'] = values;
        return this;
    }
}