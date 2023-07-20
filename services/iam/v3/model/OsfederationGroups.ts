

export class OsfederationGroups {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): OsfederationGroups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OsfederationGroups {
        this['name'] = name;
        return this;
    }
}