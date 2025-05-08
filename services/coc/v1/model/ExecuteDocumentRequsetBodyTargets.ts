

export class ExecuteDocumentRequsetBodyTargets {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequsetBodyTargets {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ExecuteDocumentRequsetBodyTargets {
        this['values'] = values;
        return this;
    }
}