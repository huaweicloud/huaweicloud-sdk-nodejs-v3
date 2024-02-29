

export class IdObject {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): IdObject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IdObject {
        this['name'] = name;
        return this;
    }
}