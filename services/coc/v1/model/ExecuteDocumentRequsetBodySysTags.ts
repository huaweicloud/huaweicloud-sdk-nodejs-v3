

export class ExecuteDocumentRequsetBodySysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ExecuteDocumentRequsetBodySysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ExecuteDocumentRequsetBodySysTags {
        this['value'] = value;
        return this;
    }
}