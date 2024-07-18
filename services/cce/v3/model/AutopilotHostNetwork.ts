

export class AutopilotHostNetwork {
    public vpc?: string;
    public subnet?: string;
    public constructor(vpc?: string, subnet?: string) { 
        this['vpc'] = vpc;
        this['subnet'] = subnet;
    }
    public withVpc(vpc: string): AutopilotHostNetwork {
        this['vpc'] = vpc;
        return this;
    }
    public withSubnet(subnet: string): AutopilotHostNetwork {
        this['subnet'] = subnet;
        return this;
    }
}