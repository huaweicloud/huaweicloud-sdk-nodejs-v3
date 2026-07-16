

export class DeleteTagItem {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeleteTagItem {
        this['value'] = value;
        return this;
    }
}