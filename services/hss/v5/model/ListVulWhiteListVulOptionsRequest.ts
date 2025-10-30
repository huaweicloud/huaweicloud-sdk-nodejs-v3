

export class ListVulWhiteListVulOptionsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    private 'image_type'?: string;
    private 'vul_type'?: string;
    private 'vul_name'?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulWhiteListVulOptionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulWhiteListVulOptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulWhiteListVulOptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListVulWhiteListVulOptionsRequest {
        this['category'] = category;
        return this;
    }
    public withImageType(imageType: string): ListVulWhiteListVulOptionsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withVulType(vulType: string): ListVulWhiteListVulOptionsRequest {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withVulName(vulName: string): ListVulWhiteListVulOptionsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
}