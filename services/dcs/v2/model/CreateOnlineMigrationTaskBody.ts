

export class CreateOnlineMigrationTaskBody {
    public name?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public constructor(name?: string, vpcId?: string, subnetId?: string, securityGroupId?: string) { 
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
    }
    public withName(name: string): CreateOnlineMigrationTaskBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateOnlineMigrationTaskBody {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): CreateOnlineMigrationTaskBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateOnlineMigrationTaskBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateOnlineMigrationTaskBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
}