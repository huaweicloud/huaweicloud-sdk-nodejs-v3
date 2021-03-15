

export class DomainInfo {
    public id?: string;
    public name: string;
    public constructor(name: any) { 
        this['name'] = name;
    }
    public withId(id: string): DomainInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DomainInfo {
        this['name'] = name;
        return this;
    }
}