

export class JobResource {
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): JobResource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): JobResource {
        this['type'] = type;
        return this;
    }
}