

export class Task {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): Task {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Task {
        this['name'] = name;
        return this;
    }
}