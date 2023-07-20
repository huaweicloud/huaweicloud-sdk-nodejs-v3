

export class FuncVpc {
    private 'vpc_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_name'?: string;
    private 'subnet_id'?: string;
    public cidr?: string;
    public gateway?: string;
    private 'security_groups'?: Array<string>;
    public constructor(vpcName?: string, vpcId?: string, subnetName?: string, subnetId?: string, cidr?: string, gateway?: string) { 
        this['vpc_name'] = vpcName;
        this['vpc_id'] = vpcId;
        this['subnet_name'] = subnetName;
        this['subnet_id'] = subnetId;
        this['cidr'] = cidr;
        this['gateway'] = gateway;
    }
    public withVpcName(vpcName: string): FuncVpc {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withVpcId(vpcId: string): FuncVpc {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetName(subnetName: string): FuncVpc {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSubnetId(subnetId: string): FuncVpc {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withCidr(cidr: string): FuncVpc {
        this['cidr'] = cidr;
        return this;
    }
    public withGateway(gateway: string): FuncVpc {
        this['gateway'] = gateway;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): FuncVpc {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
}