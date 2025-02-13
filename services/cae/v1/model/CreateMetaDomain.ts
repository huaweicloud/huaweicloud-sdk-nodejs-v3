

export class CreateMetaDomain {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateMetaDomain {
        this['name'] = name;
        return this;
    }
}