

export class ListProcessesRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public user?: string;
    public path?: string;
    private 'launch_params'?: string;
    public category?: string;
    public offset?: number;
    public limit?: number;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProcessesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListProcessesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListProcessesRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListProcessesRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withUser(user: string): ListProcessesRequest {
        this['user'] = user;
        return this;
    }
    public withPath(path: string): ListProcessesRequest {
        this['path'] = path;
        return this;
    }
    public withLaunchParams(launchParams: string): ListProcessesRequest {
        this['launch_params'] = launchParams;
        return this;
    }
    public set launchParams(launchParams: string  | undefined) {
        this['launch_params'] = launchParams;
    }
    public get launchParams(): string | undefined {
        return this['launch_params'];
    }
    public withCategory(category: string): ListProcessesRequest {
        this['category'] = category;
        return this;
    }
    public withOffset(offset: number): ListProcessesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProcessesRequest {
        this['limit'] = limit;
        return this;
    }
}