

export class ListCertificatesRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    public name?: string;
    public host?: boolean;
    private 'exp_status'?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListCertificatesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCertificatesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListCertificatesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListCertificatesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withName(name: string): ListCertificatesRequest {
        this['name'] = name;
        return this;
    }
    public withHost(host: boolean): ListCertificatesRequest {
        this['host'] = host;
        return this;
    }
    public withExpStatus(expStatus: number): ListCertificatesRequest {
        this['exp_status'] = expStatus;
        return this;
    }
    public set expStatus(expStatus: number  | undefined) {
        this['exp_status'] = expStatus;
    }
    public get expStatus(): number | undefined {
        return this['exp_status'];
    }
}