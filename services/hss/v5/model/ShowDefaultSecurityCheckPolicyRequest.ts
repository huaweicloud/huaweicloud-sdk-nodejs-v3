

export class ShowDefaultSecurityCheckPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'support_os'?: string;
    public constructor(supportOs?: string) { 
        this['support_os'] = supportOs;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDefaultSecurityCheckPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSupportOs(supportOs: string): ShowDefaultSecurityCheckPolicyRequest {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
}