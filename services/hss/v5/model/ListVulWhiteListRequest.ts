

export class ListVulWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_name'?: string;
    private 'vul_type'?: string;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulWhiteListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulWhiteListRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulName(vulName: string): ListVulWhiteListRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulType(vulType: string): ListVulWhiteListRequest {
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