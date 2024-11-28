

export class CreateGlobalEipRequestBodyGlobalEipTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateGlobalEipRequestBodyGlobalEipTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateGlobalEipRequestBodyGlobalEipTags {
        this['value'] = value;
        return this;
    }
}