

export class UpdateInstanceReq {
    public name?: string;
    public description?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'security_group_id'?: string;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'enable_acl'?: boolean;
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
    public withMaintainBegin(maintainBegin: string): UpdateInstanceReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): UpdateInstanceReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withSecurityGroupId(securityGroupId: string): UpdateInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withEnablePublicip(enablePublicip: boolean): UpdateInstanceReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): UpdateInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnableAcl(enableAcl: boolean): UpdateInstanceReq {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
}