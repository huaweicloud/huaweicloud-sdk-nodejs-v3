

export class TagEntity {
    public key?: object;
    public value?: object;
    public constructor(key?: object, value?: object) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: object): TagEntity {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): TagEntity {
        this['value'] = value;
        return this;
    }
}