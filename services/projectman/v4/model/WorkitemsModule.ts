

export class WorkitemsModule {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemsModule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemsModule {
        this['name'] = name;
        return this;
    }
}