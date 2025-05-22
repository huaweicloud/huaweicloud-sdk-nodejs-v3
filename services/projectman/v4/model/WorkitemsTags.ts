

export class WorkitemsTags {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemsTags {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemsTags {
        this['name'] = name;
        return this;
    }
}