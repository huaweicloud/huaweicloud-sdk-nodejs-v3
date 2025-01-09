

export class MapObject {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): MapObject {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): MapObject {
        this['value'] = value;
        return this;
    }
}