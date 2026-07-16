

export class ServiceIdName {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): ServiceIdName {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServiceIdName {
        this['name'] = name;
        return this;
    }
}