

export class CreateApplicationRequestBodyMetadata {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateApplicationRequestBodyMetadata {
        this['name'] = name;
        return this;
    }
}