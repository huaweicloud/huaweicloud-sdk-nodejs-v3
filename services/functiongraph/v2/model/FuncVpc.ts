

export class FuncVpc {
    private 'vpc_name': string | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_name': string | undefined;
    private 'subnet_id': string | undefined;
    public cidr: string;
    public gateway: string;
    private 'security_groups'?: Array<string> | undefined;
    public constructor(vpcName?: any, vpcId?: any, subnetName?: any, subnetId?: any, cidr?: any, gateway?: any) { 
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
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withVpcId(vpcId: string): FuncVpc {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetName(subnetName: string): FuncVpc {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName() {
        return this['subnet_name'];
    }
    public withSubnetId(subnetId: string): FuncVpc {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
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
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
}