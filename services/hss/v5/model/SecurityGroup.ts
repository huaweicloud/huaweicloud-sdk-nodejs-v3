

export class SecurityGroup {
    private 'security_group_id'?: string;
    private 'security_group_name'?: string;
    private 'security_group_description'?: string;
    public constructor(securityGroupId?: string) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): SecurityGroup {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSecurityGroupName(securityGroupName: string): SecurityGroup {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string  | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName(): string | undefined {
        return this['security_group_name'];
    }
    public withSecurityGroupDescription(securityGroupDescription: string): SecurityGroup {
        this['security_group_description'] = securityGroupDescription;
        return this;
    }
    public set securityGroupDescription(securityGroupDescription: string  | undefined) {
        this['security_group_description'] = securityGroupDescription;
    }
    public get securityGroupDescription(): string | undefined {
        return this['security_group_description'];
    }
}