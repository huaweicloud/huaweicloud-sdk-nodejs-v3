

export class ShowCommonPortRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    public port?: number;
    public constructor(category?: string, port?: number) { 
        this['category'] = category;
        this['port'] = port;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCommonPortRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): ShowCommonPortRequest {
        this['category'] = category;
        return this;
    }
    public withPort(port: number): ShowCommonPortRequest {
        this['port'] = port;
        return this;
    }
}