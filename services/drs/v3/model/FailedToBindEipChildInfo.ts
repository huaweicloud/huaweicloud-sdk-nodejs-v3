

export class FailedToBindEipChildInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): FailedToBindEipChildInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FailedToBindEipChildInfo {
        this['name'] = name;
        return this;
    }
}