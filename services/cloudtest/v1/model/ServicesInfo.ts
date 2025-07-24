

export class ServicesInfo {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): ServicesInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServicesInfo {
        this['name'] = name;
        return this;
    }
}