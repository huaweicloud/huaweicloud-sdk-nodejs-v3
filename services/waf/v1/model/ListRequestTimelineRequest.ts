

export class ListRequestTimelineRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public from: number;
    public to: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    private 'group_by'?: string | undefined;
    public constructor(contentType?: any, from?: any, to?: any) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListRequestTimelineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRequestTimelineRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListRequestTimelineRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListRequestTimelineRequest {
        this['to'] = to;
        return this;
    }
    public withHosts(hosts: Array<string>): ListRequestTimelineRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListRequestTimelineRequest {
        this['instances'] = instances;
        return this;
    }
    public withGroupBy(groupBy: string): ListRequestTimelineRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy() {
        return this['group_by'];
    }
}