

export class HostNetwork {
    public vpc?: string;
    public subnet?: string;
    private 'SecurityGroup'?: string;
    public controlPlaneSecurityGroup?: string;
    public constructor(vpc?: string, subnet?: string) { 
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
    public set securityGroup(securityGroup: string  | undefined) {
        this['SecurityGroup'] = securityGroup;
    }
    public get securityGroup(): string | undefined {
        return this['SecurityGroup'];
    }
    public withControlPlaneSecurityGroup(controlPlaneSecurityGroup: string): HostNetwork {
        this['controlPlaneSecurityGroup'] = controlPlaneSecurityGroup;
        return this;
    }
}