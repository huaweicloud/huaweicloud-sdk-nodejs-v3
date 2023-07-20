

export class MysqlTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): MysqlTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): MysqlTags {
        this['value'] = value;
        return this;
    }
}