

export class UpdateGlobalEip {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateGlobalEip {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateGlobalEip {
        this['name'] = name;
        return this;
    }
}