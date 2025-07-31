

export class ListKernelModuleStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListKernelModuleStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListKernelModuleStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKernelModuleStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListKernelModuleStatisticsRequest {
        this['name'] = name;
        return this;
    }
}