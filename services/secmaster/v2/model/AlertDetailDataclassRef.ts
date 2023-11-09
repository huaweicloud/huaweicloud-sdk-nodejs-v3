

export class AlertDetailDataclassRef {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AlertDetailDataclassRef {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlertDetailDataclassRef {
        this['name'] = name;
        return this;
    }
}