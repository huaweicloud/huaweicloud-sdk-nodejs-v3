

export class ExecuteDocumentRequestBodyTargets {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequestBodyTargets {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ExecuteDocumentRequestBodyTargets {
        this['values'] = values;
        return this;
    }
}