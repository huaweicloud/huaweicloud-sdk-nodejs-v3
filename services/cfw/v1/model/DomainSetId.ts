

export class DomainSetId {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): DomainSetId {
        this['name'] = name;
        return this;
    }
    public withId(id: string): DomainSetId {
        this['id'] = id;
        return this;
    }
}