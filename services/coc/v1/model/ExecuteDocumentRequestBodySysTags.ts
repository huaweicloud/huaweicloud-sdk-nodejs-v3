

export class ExecuteDocumentRequestBodySysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequestBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExecuteDocumentRequestBodySysTags {
        this['value'] = value;
        return this;
    }
}