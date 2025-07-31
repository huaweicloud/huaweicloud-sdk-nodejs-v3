

export class ListKernelModuleHostInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'part_match'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListKernelModuleHostInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListKernelModuleHostInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKernelModuleHostInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListKernelModuleHostInfoRequest {
        this['name'] = name;
        return this;
    }
    public withHostName(hostName: string): ListKernelModuleHostInfoRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListKernelModuleHostInfoRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPartMatch(partMatch: boolean): ListKernelModuleHostInfoRequest {
        this['part_match'] = partMatch;
        return this;
    }
    public set partMatch(partMatch: boolean  | undefined) {
        this['part_match'] = partMatch;
    }
    public get partMatch(): boolean | undefined {
        return this['part_match'];
    }
}