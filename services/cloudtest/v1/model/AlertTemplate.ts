

export class AlertTemplate {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AlertTemplate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlertTemplate {
        this['name'] = name;
        return this;
    }
}