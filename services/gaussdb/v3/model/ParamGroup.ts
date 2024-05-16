

export class ParamGroup {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ParamGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ParamGroup {
        this['name'] = name;
        return this;
    }
}