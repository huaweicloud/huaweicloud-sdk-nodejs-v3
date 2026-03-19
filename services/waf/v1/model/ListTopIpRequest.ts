

export class ListTopIpRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public top?: number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListTopIpRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListTopIpRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListTopIpRequest {
        this['to'] = to;
        return this;
    }
    public withTop(top: number): ListTopIpRequest {
        this['top'] = top;
        return this;
    }
    public withHosts(hosts: Array<string>): ListTopIpRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListTopIpRequest {
        this['instances'] = instances;
        return this;
    }
}