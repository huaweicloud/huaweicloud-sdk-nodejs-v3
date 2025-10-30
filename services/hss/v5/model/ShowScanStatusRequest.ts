

export class ShowScanStatusRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public type?: string;
    public constructor(hostId?: string, type?: string) { 
        this['host_id'] = hostId;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowScanStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ShowScanStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withType(type: string): ShowScanStatusRequest {
        this['type'] = type;
        return this;
    }
}