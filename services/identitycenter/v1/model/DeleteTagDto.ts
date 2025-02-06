

export class DeleteTagDto {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): DeleteTagDto {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeleteTagDto {
        this['value'] = value;
        return this;
    }
}