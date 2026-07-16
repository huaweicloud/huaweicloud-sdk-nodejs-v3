

export class ServerHpsInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ServerHpsInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerHpsInfo {
        this['name'] = name;
        return this;
    }
}