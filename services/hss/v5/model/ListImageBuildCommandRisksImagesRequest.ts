

export class ListImageBuildCommandRisksImagesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_type'?: string;
    private 'rule_id'?: string;
    private 'image_id'?: string;
    public constructor(imageType?: string, ruleId?: string) { 
        this['image_type'] = imageType;
        this['rule_id'] = ruleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageBuildCommandRisksImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListImageBuildCommandRisksImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageBuildCommandRisksImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageType(imageType: string): ListImageBuildCommandRisksImagesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withRuleId(ruleId: string): ListImageBuildCommandRisksImagesRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withImageId(imageId: string): ListImageBuildCommandRisksImagesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}