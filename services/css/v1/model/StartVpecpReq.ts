

export class StartVpecpReq {
    public endpointWithDnsName?: boolean;
    public constructor() { 
    }
    public withEndpointWithDnsName(endpointWithDnsName: boolean): StartVpecpReq {
        this['endpointWithDnsName'] = endpointWithDnsName;
        return this;
    }
}