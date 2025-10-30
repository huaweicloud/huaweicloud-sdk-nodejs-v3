

export class ListImageSensitiveInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_type'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ListImageSensitiveInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageSensitiveInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListImageSensitiveInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageSensitiveInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListImageSensitiveInfoRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
}