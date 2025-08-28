

export class ListImageWhiteListsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'global_image_type'?: string;
    public type?: string;
    private 'vul_name'?: string;
    private 'vul_type'?: string;
    public constructor(globalImageType?: string, type?: string) { 
        this['global_image_type'] = globalImageType;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListImageWhiteListsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageWhiteListsRequest {
        this['limit'] = limit;
        return this;
    }
    public withGlobalImageType(globalImageType: string): ListImageWhiteListsRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: string): ListImageWhiteListsRequest {
        this['type'] = type;
        return this;
    }
    public withVulName(vulName: string): ListImageWhiteListsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulType(vulType: string): ListImageWhiteListsRequest {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
}