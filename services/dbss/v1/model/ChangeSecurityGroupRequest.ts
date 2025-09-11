

export class ChangeSecurityGroupRequest {
    private 'security_group_ids'?: Array<string>;
    public constructor(securityGroupIds?: Array<string>) { 
        this['security_group_ids'] = securityGroupIds;
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): ChangeSecurityGroupRequest {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
}