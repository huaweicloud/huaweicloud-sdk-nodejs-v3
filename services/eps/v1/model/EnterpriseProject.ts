

export class EnterpriseProject {
    public name: string;
    public description?: string;
    public type?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): EnterpriseProject {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnterpriseProject {
        this['description'] = description;
        return this;
    }
    public withType(type: string): EnterpriseProject {
        this['type'] = type;
        return this;
    }
}