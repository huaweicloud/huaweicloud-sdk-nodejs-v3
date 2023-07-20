

export class CreateSessionReqResource {
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): CreateSessionReqResource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateSessionReqResource {
        this['type'] = type;
        return this;
    }
}