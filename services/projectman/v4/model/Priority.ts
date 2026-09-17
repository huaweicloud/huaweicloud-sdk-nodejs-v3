

export class Priority {
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withName(name: string): Priority {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Priority {
        this['id'] = id;
        return this;
    }
}