

export class ScopeDomainOption {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ScopeDomainOption {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScopeDomainOption {
        this['name'] = name;
        return this;
    }
}