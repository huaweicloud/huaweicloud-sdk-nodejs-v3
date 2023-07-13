

export class TagVo {
    public key: string;
    public value?: string;
    public constructor(key?: any) { 
        this['key'] = key;
    }
    public withKey(key: string): TagVo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagVo {
        this['value'] = value;
        return this;
    }
}