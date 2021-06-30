

export class HostNetwork {
    public vpc: string;
    public subnet: string;
    private 'SecurityGroup'?: string | undefined;
    public constructor(vpc?: any, subnet?: any) { 
        this['vpc'] = vpc;
        this['subnet'] = subnet;
    }
    public withVpc(vpc: string): HostNetwork {
        this['vpc'] = vpc;
        return this;
    }
    public withSubnet(subnet: string): HostNetwork {
        this['subnet'] = subnet;
        return this;
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
}