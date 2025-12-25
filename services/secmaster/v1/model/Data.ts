

export class Data {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): Data {
        this['name'] = name;
        return this;
    }
    public withId(id: string): Data {
        this['id'] = id;
        return this;
    }
}