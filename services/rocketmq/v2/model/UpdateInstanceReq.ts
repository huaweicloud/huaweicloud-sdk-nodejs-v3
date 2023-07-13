

export class UpdateInstanceReq {
    public name?: string;
    public description?: string;
    private 'security_group_id'?: string | undefined;
    private 'enable_acl'?: boolean | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'publicip_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateInstanceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateInstanceReq {
        this['description'] = description;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): UpdateInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withEnableAcl(enableAcl: boolean): UpdateInstanceReq {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl() {
        return this['enable_acl'];
    }
    public withEnablePublicip(enablePublicip: boolean): UpdateInstanceReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): UpdateInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
}