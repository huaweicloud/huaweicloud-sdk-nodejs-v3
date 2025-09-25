

export class CreateClusterInstanceNicsBody {
    public vpcId?: string;
    public netId?: string;
    public securityGroupId?: string;
    public ips?: Array<string>;
    public constructor(vpcId?: string, netId?: string, securityGroupId?: string) { 
        this['vpcId'] = vpcId;
        this['netId'] = netId;
        this['securityGroupId'] = securityGroupId;
    }
    public withVpcId(vpcId: string): CreateClusterInstanceNicsBody {
        this['vpcId'] = vpcId;
        return this;
    }
    public withNetId(netId: string): CreateClusterInstanceNicsBody {
        this['netId'] = netId;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): CreateClusterInstanceNicsBody {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withIps(ips: Array<string>): CreateClusterInstanceNicsBody {
        this['ips'] = ips;
        return this;
    }
}