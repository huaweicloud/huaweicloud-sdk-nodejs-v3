

export class ListPortHostRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public category?: string;
    public limit?: number;
    public offset?: number;
    public port?: number;
    public type?: string;
    public constructor(category?: string, port?: number) { 
        this['category'] = category;
        this['port'] = port;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPortHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListPortHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListPortHostRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withCategory(category: string): ListPortHostRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ListPortHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withPort(port: number): ListPortHostRequest {
        this['port'] = port;
        return this;
    }
    public withType(type: string): ListPortHostRequest {
        this['type'] = type;
        return this;
    }
}