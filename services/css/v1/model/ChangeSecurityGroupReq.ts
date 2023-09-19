

export class ChangeSecurityGroupReq {
    private 'security_group_ids'?: string;
    public constructor(securityGroupIds?: string) { 
        this['security_group_ids'] = securityGroupIds;
    }
    public withSecurityGroupIds(securityGroupIds: string): ChangeSecurityGroupReq {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: string  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): string | undefined {
        return this['security_group_ids'];
    }
}