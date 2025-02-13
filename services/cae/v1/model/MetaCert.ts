

export class MetaCert {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): MetaCert {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MetaCert {
        this['name'] = name;
        return this;
    }
}