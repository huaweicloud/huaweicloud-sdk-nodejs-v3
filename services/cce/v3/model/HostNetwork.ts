

export class HostNetwork {
    private 'SecurityGroup'?: string | undefined;
    public highwaySubnet?: string;
    public subnet: string;
    public vpc: string;
    public constructor(subnet?: any, vpc?: any) { 
        this['subnet'] = subnet;
        this['vpc'] = vpc;
    }
    public withSecurityGroup(securityGroup: string): HostNetwork {
        this['SecurityGroup'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: string | undefined) {
        this['SecurityGroup'] = securityGroup;
    }
    public get securityGroup() {
        return this['SecurityGroup'];
    }
    public withHighwaySubnet(highwaySubnet: string): HostNetwork {
        this['highwaySubnet'] = highwaySubnet;
        return this;
    }
    public withSubnet(subnet: string): HostNetwork {
        this['subnet'] = subnet;
        return this;
    }
    public withVpc(vpc: string): HostNetwork {
        this['vpc'] = vpc;
        return this;
    }
}