

export class CreateGlobalEip {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): CreateGlobalEip {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateGlobalEip {
        this['name'] = name;
        return this;
    }
}