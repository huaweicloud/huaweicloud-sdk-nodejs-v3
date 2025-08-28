

export class ListWebFrameworkInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'file_name'?: string;
    public category?: string;
    public constructor(hostId?: string, category?: string) { 
        this['host_id'] = hostId;
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebFrameworkInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListWebFrameworkInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withFileName(fileName: string): ListWebFrameworkInfoRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withCategory(category: string): ListWebFrameworkInfoRequest {
        this['category'] = category;
        return this;
    }
}