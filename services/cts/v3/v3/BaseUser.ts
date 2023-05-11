

export class BaseUser {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): BaseUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BaseUser {
        this['name'] = name;
        return this;
    }
}