

export class DataClassRef {
    public id?: string;
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): DataClassRef {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DataClassRef {
        this['name'] = name;
        return this;
    }
}