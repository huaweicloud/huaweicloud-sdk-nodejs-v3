

export class PublicIpRes {
    public region?: string;
    public id?: string;
    public address?: string;
    public constructor() { 
    }
    public withRegion(region: string): PublicIpRes {
        this['region'] = region;
        return this;
    }
    public withId(id: string): PublicIpRes {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): PublicIpRes {
        this['address'] = address;
        return this;
    }
}