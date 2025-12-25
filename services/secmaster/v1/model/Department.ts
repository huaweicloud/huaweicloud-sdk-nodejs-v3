

export class Department {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Department {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Department {
        this['name'] = name;
        return this;
    }
}