

export class PublicIpReq {
    public region?: string;
    public id?: string;
    public constructor() { 
    }
    public withRegion(region: string): PublicIpReq {
        this['region'] = region;
        return this;
    }
    public withId(id: string): PublicIpReq {
        this['id'] = id;
        return this;
    }
}