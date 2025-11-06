

export class RouteRespsResource {
    public ipAddress?: string;
    public ipNetMask?: string;
    public updateAt?: string;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): RouteRespsResource {
        this['ipAddress'] = ipAddress;
        return this;
    }
    public withIpNetMask(ipNetMask: string): RouteRespsResource {
        this['ipNetMask'] = ipNetMask;
        return this;
    }
    public withUpdateAt(updateAt: string): RouteRespsResource {
        this['updateAt'] = updateAt;
        return this;
    }
}