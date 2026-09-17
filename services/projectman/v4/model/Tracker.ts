

export class Tracker {
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withName(name: string): Tracker {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Tracker {
        this['id'] = id;
        return this;
    }
}