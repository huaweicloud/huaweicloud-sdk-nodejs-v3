

export class RsetResolutionInstances {
    public id?: string;
    public name?: string;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): RsetResolutionInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RsetResolutionInstances {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): RsetResolutionInstances {
        this['status'] = status;
        return this;
    }
    public withType(type: string): RsetResolutionInstances {
        this['type'] = type;
        return this;
    }
}