

export class DomainSetResponseData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): DomainSetResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DomainSetResponseData {
        this['name'] = name;
        return this;
    }
}