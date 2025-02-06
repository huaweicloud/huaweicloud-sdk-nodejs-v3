

export class TagDto {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TagDto {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagDto {
        this['value'] = value;
        return this;
    }
}