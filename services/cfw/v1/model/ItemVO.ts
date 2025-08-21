

export class ItemVO {
    public key?: string;
    public name?: string;
    public value?: number;
    public constructor() { 
    }
    public withKey(key: string): ItemVO {
        this['key'] = key;
        return this;
    }
    public withName(name: string): ItemVO {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): ItemVO {
        this['value'] = value;
        return this;
    }
}