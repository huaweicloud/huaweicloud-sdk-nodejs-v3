

export class Status {
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withName(name: string): Status {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Status {
        this['id'] = id;
        return this;
    }
}