

export class ListResponseCodeTimelineRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    private 'response_source'?: ListResponseCodeTimelineRequestResponseSourceEnum | string;
    private 'group_by'?: string;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListResponseCodeTimelineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListResponseCodeTimelineRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListResponseCodeTimelineRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListResponseCodeTimelineRequest {
        this['to'] = to;
        return this;
    }
    public withHosts(hosts: Array<string>): ListResponseCodeTimelineRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListResponseCodeTimelineRequest {
        this['instances'] = instances;
        return this;
    }
    public withResponseSource(responseSource: ListResponseCodeTimelineRequestResponseSourceEnum | string): ListResponseCodeTimelineRequest {
        this['response_source'] = responseSource;
        return this;
    }
    public set responseSource(responseSource: ListResponseCodeTimelineRequestResponseSourceEnum | string  | undefined) {
        this['response_source'] = responseSource;
    }
    public get responseSource(): ListResponseCodeTimelineRequestResponseSourceEnum | string | undefined {
        return this['response_source'];
    }
    public withGroupBy(groupBy: string): ListResponseCodeTimelineRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListResponseCodeTimelineRequestResponseSourceEnum {
    WAF = 'WAF',
    UPSTREAM = 'UPSTREAM'
}
