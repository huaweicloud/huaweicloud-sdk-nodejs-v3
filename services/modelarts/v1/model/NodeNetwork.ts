

export class NodeNetwork {
    public vpc?: string;
    public subnet?: string;
    public securityGroups?: Array<string>;
    public constructor() { 
    }
    public withVpc(vpc: string): NodeNetwork {
        this['vpc'] = vpc;
        return this;
    }
    public withSubnet(subnet: string): NodeNetwork {
        this['subnet'] = subnet;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): NodeNetwork {
        this['securityGroups'] = securityGroups;
        return this;
    }
}