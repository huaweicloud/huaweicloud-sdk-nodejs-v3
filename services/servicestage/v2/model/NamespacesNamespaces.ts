

export class NamespacesNamespaces {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): NamespacesNamespaces {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NamespacesNamespaces {
        this['name'] = name;
        return this;
    }
}