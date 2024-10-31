

export class ServiceSetId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ServiceSetId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServiceSetId {
        this['name'] = name;
        return this;
    }
}