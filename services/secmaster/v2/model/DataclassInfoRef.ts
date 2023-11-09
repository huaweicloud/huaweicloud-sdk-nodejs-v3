

export class DataclassInfoRef {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): DataclassInfoRef {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DataclassInfoRef {
        this['name'] = name;
        return this;
    }
}