

export class StatusAttributeVO {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): StatusAttributeVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StatusAttributeVO {
        this['name'] = name;
        return this;
    }
}