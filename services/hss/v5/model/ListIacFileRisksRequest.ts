

export class ListIacFileRisksRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'file_id'?: string;
    private 'risk_name'?: string;
    private 'risk_level'?: string;
    private 'risk_category'?: string;
    public constructor(offset?: number, limit?: number, fileId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['file_id'] = fileId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIacFileRisksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListIacFileRisksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIacFileRisksRequest {
        this['limit'] = limit;
        return this;
    }
    public withFileId(fileId: string): ListIacFileRisksRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withRiskName(riskName: string): ListIacFileRisksRequest {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withRiskLevel(riskLevel: string): ListIacFileRisksRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRiskCategory(riskCategory: string): ListIacFileRisksRequest {
        this['risk_category'] = riskCategory;
        return this;
    }
    public set riskCategory(riskCategory: string  | undefined) {
        this['risk_category'] = riskCategory;
    }
    public get riskCategory(): string | undefined {
        return this['risk_category'];
    }
}