

export class ImageTag {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): ImageTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ImageTag {
        this['value'] = value;
        return this;
    }
}