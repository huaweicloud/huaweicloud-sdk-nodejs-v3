

export class SimpleUserIn {
    public id?: number;
    public identifier?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): SimpleUserIn {
        this['id'] = id;
        return this;
    }
    public withIdentifier(identifier: string): SimpleUserIn {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): SimpleUserIn {
        this['name'] = name;
        return this;
    }
}