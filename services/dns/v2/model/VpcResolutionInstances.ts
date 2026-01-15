

export class VpcResolutionInstances {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): VpcResolutionInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcResolutionInstances {
        this['name'] = name;
        return this;
    }
}