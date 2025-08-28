

export class ListTopUrlRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public top?: number;
    public hosts?: string;
    public instances?: string;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListTopUrlRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopUrlRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListTopUrlRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListTopUrlRequest {
        this['to'] = to;
        return this;
    }
    public withTop(top: number): ListTopUrlRequest {
        this['top'] = top;
        return this;
    }
    public withHosts(hosts: string): ListTopUrlRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: string): ListTopUrlRequest {
        this['instances'] = instances;
        return this;
    }
}