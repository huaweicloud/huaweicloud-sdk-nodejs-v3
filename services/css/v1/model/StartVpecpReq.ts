

export class StartVpecpReq {
    private 'endpoint_with_dns_name'?: boolean;
    public constructor() { 
    }
    public withEndpointWithDnsName(endpointWithDnsName: boolean): StartVpecpReq {
        this['endpoint_with_dns_name'] = endpointWithDnsName;
        return this;
    }
    public set endpointWithDnsName(endpointWithDnsName: boolean  | undefined) {
        this['endpoint_with_dns_name'] = endpointWithDnsName;
    }
    public get endpointWithDnsName(): boolean | undefined {
        return this['endpoint_with_dns_name'];
    }
}