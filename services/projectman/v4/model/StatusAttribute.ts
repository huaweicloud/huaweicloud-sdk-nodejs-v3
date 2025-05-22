

export class StatusAttribute {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): StatusAttribute {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StatusAttribute {
        this['name'] = name;
        return this;
    }
}