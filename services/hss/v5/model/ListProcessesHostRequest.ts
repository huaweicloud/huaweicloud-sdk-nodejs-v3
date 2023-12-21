

export class ListProcessesHostRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public path?: string;
    public category?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProcessesHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListProcessesHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListProcessesHostRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPath(path: string): ListProcessesHostRequest {
        this['path'] = path;
        return this;
    }
    public withCategory(category: string): ListProcessesHostRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ListProcessesHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProcessesHostRequest {
        this['offset'] = offset;
        return this;
    }
}