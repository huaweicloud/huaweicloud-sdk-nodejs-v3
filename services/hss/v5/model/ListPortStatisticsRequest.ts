

export class ListPortStatisticsRequest {
    public port?: number;
    private 'port_string'?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public constructor() { 
    }
    public withPort(port: number): ListPortStatisticsRequest {
        this['port'] = port;
        return this;
    }
    public withPortString(portString: string): ListPortStatisticsRequest {
        this['port_string'] = portString;
        return this;
    }
    public set portString(portString: string  | undefined) {
        this['port_string'] = portString;
    }
    public get portString(): string | undefined {
        return this['port_string'];
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
    public withSortKey(sortKey: string): ListPortStatisticsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPortStatisticsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListPortStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListPortStatisticsRequest {
        this['category'] = category;
        return this;
    }
}