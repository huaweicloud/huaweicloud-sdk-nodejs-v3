

export class ResourceGroupTagRelation {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ResourceGroupTagRelation {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ResourceGroupTagRelation {
        this['value'] = value;
        return this;
    }
}