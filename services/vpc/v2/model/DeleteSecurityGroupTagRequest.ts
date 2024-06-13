

export class DeleteSecurityGroupTagRequest {
    public key?: string;
    private 'security_group_id'?: string;
    public constructor(key?: string, securityGroupId?: string) { 
        this['key'] = key;
        this['security_group_id'] = securityGroupId;
    }
    public withKey(key: string): DeleteSecurityGroupTagRequest {
        this['key'] = key;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): DeleteSecurityGroupTagRequest {
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