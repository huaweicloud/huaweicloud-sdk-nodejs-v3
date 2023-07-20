

export class ListQpsTimelineRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public hosts?: string;
    public instances?: string;
    private 'group_by'?: string;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListQpsTimelineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListQpsTimelineRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListQpsTimelineRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListQpsTimelineRequest {
        this['to'] = to;
        return this;
    }
    public withHosts(hosts: string): ListQpsTimelineRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: string): ListQpsTimelineRequest {
        this['instances'] = instances;
        return this;
    }
    public withGroupBy(groupBy: string): ListQpsTimelineRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
}