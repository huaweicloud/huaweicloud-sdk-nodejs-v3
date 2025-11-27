

export class ExecuteDocumentRequestBodyParameters {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequestBodyParameters {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExecuteDocumentRequestBodyParameters {
        this['value'] = value;
        return this;
    }
}