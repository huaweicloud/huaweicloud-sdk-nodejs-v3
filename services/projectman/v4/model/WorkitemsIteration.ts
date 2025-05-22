

export class WorkitemsIteration {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemsIteration {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemsIteration {
        this['name'] = name;
        return this;
    }
}