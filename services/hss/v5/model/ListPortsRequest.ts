

export class ListPortsRequest {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public port?: number;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withHostId(hostId: string): ListPortsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListPortsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListPortsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPort(port: number): ListPortsRequest {
        this['port'] = port;
        return this;
    }
    public withType(type: string): ListPortsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPortsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListPortsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListPortsRequest {
        this['category'] = category;
        return this;
    }
}