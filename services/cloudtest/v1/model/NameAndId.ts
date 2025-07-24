

export class NameAndId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): NameAndId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NameAndId {
        this['name'] = name;
        return this;
    }
}