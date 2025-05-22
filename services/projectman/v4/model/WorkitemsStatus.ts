

export class WorkitemsStatus {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemsStatus {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemsStatus {
        this['name'] = name;
        return this;
    }
}