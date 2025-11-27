

export class ConnectEndpoint {
    public type?: string;
    public name?: string;
    public id?: string;
    public region?: string;
    public constructor() { 
    }
    public withType(type: string): ConnectEndpoint {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ConnectEndpoint {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ConnectEndpoint {
        this['id'] = id;
        return this;
    }
    public withRegion(region: string): ConnectEndpoint {
        this['region'] = region;
        return this;
    }
}