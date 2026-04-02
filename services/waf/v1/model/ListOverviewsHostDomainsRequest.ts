

export class ListOverviewsHostDomainsRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    private 'host_id'?: string;
    public constructor(from?: number, to?: number, hostId?: string) { 
        this['from'] = from;
        this['to'] = to;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: string): ListOverviewsHostDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListOverviewsHostDomainsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListOverviewsHostDomainsRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListOverviewsHostDomainsRequest {
        this['to'] = to;
        return this;
    }
    public withHostId(hostId: string): ListOverviewsHostDomainsRequest {
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