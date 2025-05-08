

export class CreateDocumentRequestBodyTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): CreateDocumentRequestBodyTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateDocumentRequestBodyTags {
        this['value'] = value;
        return this;
    }
}