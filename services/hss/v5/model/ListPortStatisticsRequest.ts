

export class ListPortStatisticsRequest {
    public port?: number;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withPort(port: number): ListPortStatisticsRequest {
        this['port'] = port;
        return this;
    }
    public withType(type: string): ListPortStatisticsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPortStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListPortStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
}