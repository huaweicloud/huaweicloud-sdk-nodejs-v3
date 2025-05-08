

export class ExecuteDocumentRequsetBodyParameters {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequsetBodyParameters {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExecuteDocumentRequsetBodyParameters {
        this['value'] = value;
        return this;
    }
}