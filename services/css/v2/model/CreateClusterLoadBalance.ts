

export class CreateClusterLoadBalance {
    public endpointWithDnsName?: boolean;
    public vpcPermissions?: Array<string>;
    public constructor(endpointWithDnsName?: boolean) { 
        this['endpointWithDnsName'] = endpointWithDnsName;
    }
    public withEndpointWithDnsName(endpointWithDnsName: boolean): CreateClusterLoadBalance {
        this['endpointWithDnsName'] = endpointWithDnsName;
        return this;
    }
    public withVpcPermissions(vpcPermissions: Array<string>): CreateClusterLoadBalance {
        this['vpcPermissions'] = vpcPermissions;
        return this;
    }
}