

export class DataClassRefPojo {
    public id?: string;
    public name?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DataClassRefPojo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DataClassRefPojo {
        this['name'] = name;
        return this;
    }
}