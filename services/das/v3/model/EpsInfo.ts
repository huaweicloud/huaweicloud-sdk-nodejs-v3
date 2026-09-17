

export class EpsInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): EpsInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EpsInfo {
        this['name'] = name;
        return this;
    }
}