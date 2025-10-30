

export class ListImageBuildCommandRisksRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'risk_name'?: string;
    private 'risk_level'?: string;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withRegion(region: string): ListImageBuildCommandRisksRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageBuildCommandRisksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListImageBuildCommandRisksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageBuildCommandRisksRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListImageBuildCommandRisksRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): ListImageBuildCommandRisksRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withRiskName(riskName: string): ListImageBuildCommandRisksRequest {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withRiskLevel(riskLevel: string): ListImageBuildCommandRisksRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
}