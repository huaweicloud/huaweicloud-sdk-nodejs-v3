

export class CreateClusterLoadBalance {
    public endpointWithDnsName?: boolean;
    public vpcPermissions?: Array<string>;
    public professionVpcep?: boolean;
    public dualstackEnable?: boolean;
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
    public withProfessionVpcep(professionVpcep: boolean): CreateClusterLoadBalance {
        this['professionVpcep'] = professionVpcep;
        return this;
    }
    public withDualstackEnable(dualstackEnable: boolean): CreateClusterLoadBalance {
        this['dualstackEnable'] = dualstackEnable;
        return this;
    }
}