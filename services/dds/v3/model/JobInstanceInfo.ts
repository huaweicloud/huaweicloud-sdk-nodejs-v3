

export class JobInstanceInfo {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): JobInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobInstanceInfo {
        this['name'] = name;
        return this;
    }
}