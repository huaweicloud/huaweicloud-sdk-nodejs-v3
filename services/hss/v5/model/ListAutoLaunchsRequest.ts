

export class ListAutoLaunchsRequest {
    private 'host_id'?: string;
    private 'host_name'?: string;
    public name?: string;
    private 'host_ip'?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): ListAutoLaunchsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListAutoLaunchsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withName(name: string): ListAutoLaunchsRequest {
        this['name'] = name;
        return this;
    }
    public withHostIp(hostIp: string): ListAutoLaunchsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withType(type: string): ListAutoLaunchsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAutoLaunchsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAutoLaunchsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAutoLaunchsRequest {
        this['offset'] = offset;
        return this;
    }
}