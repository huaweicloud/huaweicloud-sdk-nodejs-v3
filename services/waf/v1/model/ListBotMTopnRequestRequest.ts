

export class ListBotMTopnRequestRequest {
    private 'Content-Type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'tenant_id'?: string;
    private 'enterprise_project_id'?: string;
    public hosts?: Array<string>;
    public topn?: number;
    public region?: string;
    public site?: string;
    public constructor(contentType?: string, startTime?: number, endTime?: number) { 
        this['Content-Type'] = contentType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withContentType(contentType: string): ListBotMTopnRequestRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withStartTime(startTime: number): ListBotMTopnRequestRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListBotMTopnRequestRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTenantId(tenantId: string): ListBotMTopnRequestRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBotMTopnRequestRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHosts(hosts: Array<string>): ListBotMTopnRequestRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withTopn(topn: number): ListBotMTopnRequestRequest {
        this['topn'] = topn;
        return this;
    }
    public withRegion(region: string): ListBotMTopnRequestRequest {
        this['region'] = region;
        return this;
    }
    public withSite(site: string): ListBotMTopnRequestRequest {
        this['site'] = site;
        return this;
    }
}