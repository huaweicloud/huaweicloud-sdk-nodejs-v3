

export class ListInstancePoolsRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    public name?: string;
    public type?: Array<string>;
    private 'vpc_id'?: string;
    public detail?: boolean;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListInstancePoolsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstancePoolsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListInstancePoolsRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListInstancePoolsRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withName(name: string): ListInstancePoolsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): ListInstancePoolsRequest {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): ListInstancePoolsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDetail(detail: boolean): ListInstancePoolsRequest {
        this['detail'] = detail;
        return this;
    }
}