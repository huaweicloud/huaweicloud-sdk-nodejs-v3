

export class TmsTagEntity {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TmsTagEntity {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTagEntity {
        this['value'] = value;
        return this;
    }
}