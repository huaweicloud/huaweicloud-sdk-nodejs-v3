

export class ShowSecurityReportLogoRequest {
    private 'enterprise_project_id'?: string;
    private 'logo_type'?: string;
    private 'logo_id'?: string;
    public constructor(logoType?: string) { 
        this['logo_type'] = logoType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSecurityReportLogoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLogoType(logoType: string): ShowSecurityReportLogoRequest {
        this['logo_type'] = logoType;
        return this;
    }
    public set logoType(logoType: string  | undefined) {
        this['logo_type'] = logoType;
    }
    public get logoType(): string | undefined {
        return this['logo_type'];
    }
    public withLogoId(logoId: string): ShowSecurityReportLogoRequest {
        this['logo_id'] = logoId;
        return this;
    }
    public set logoId(logoId: string  | undefined) {
        this['logo_id'] = logoId;
    }
    public get logoId(): string | undefined {
        return this['logo_id'];
    }
}