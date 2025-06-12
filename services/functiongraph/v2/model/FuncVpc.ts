

export class FuncVpc {
    private 'domain_id'?: string;
    public namespace?: string;
    private 'vpc_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_name'?: string;
    private 'subnet_id'?: string;
    public cidr?: string;
    public gateway?: string;
    private 'security_groups'?: Array<string>;
    private 'is_safety'?: boolean;
    public constructor(vpcId?: string, subnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withDomainId(domainId: string): FuncVpc {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): FuncVpc {
        this['namespace'] = namespace;
        return this;
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
    public withIsSafety(isSafety: boolean): FuncVpc {
        this['is_safety'] = isSafety;
        return this;
    }
    public set isSafety(isSafety: boolean  | undefined) {
        this['is_safety'] = isSafety;
    }
    public get isSafety(): boolean | undefined {
        return this['is_safety'];
    }
}