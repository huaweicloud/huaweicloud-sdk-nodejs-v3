

export class CreateMetaCert {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateMetaCert {
        this['name'] = name;
        return this;
    }
}