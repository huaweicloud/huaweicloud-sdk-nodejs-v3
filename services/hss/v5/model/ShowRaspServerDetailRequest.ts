

export class ShowRaspServerDetailRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'host_id'?: string;
    public keyword?: string;
    private 'app_protect_status'?: number;
    public constructor(limit?: number, offset?: number, hostId?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowRaspServerDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ShowRaspServerDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowRaspServerDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withHostId(hostId: string): ShowRaspServerDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withKeyword(keyword: string): ShowRaspServerDetailRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withAppProtectStatus(appProtectStatus: number): ShowRaspServerDetailRequest {
        this['app_protect_status'] = appProtectStatus;
        return this;
    }
    public set appProtectStatus(appProtectStatus: number  | undefined) {
        this['app_protect_status'] = appProtectStatus;
    }
    public get appProtectStatus(): number | undefined {
        return this['app_protect_status'];
    }
}