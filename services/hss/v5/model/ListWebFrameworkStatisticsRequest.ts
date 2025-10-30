

export class ListWebFrameworkStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public category?: string;
    private 'file_name'?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebFrameworkStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebFrameworkStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebFrameworkStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategory(category: string): ListWebFrameworkStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withFileName(fileName: string): ListWebFrameworkStatisticsRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}