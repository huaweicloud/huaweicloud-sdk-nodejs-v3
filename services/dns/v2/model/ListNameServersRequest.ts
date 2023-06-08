

export class ListNameServersRequest {
    public type?: string;
    public region?: string;
    public constructor() { 
    }
    public withType(type: string): ListNameServersRequest {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): ListNameServersRequest {
        this['region'] = region;
        return this;
    }
}