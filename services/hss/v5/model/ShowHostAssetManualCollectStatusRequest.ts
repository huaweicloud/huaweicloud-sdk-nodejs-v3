

export class ShowHostAssetManualCollectStatusRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'host_id'?: string;
    public constructor(type?: string, hostId?: string) { 
        this['type'] = type;
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHostAssetManualCollectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ShowHostAssetManualCollectStatusRequest {
        this['type'] = type;
        return this;
    }
    public withHostId(hostId: string): ShowHostAssetManualCollectStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}