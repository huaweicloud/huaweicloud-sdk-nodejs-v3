

export class TmsTagDTO {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TmsTagDTO {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTagDTO {
        this['value'] = value;
        return this;
    }
}