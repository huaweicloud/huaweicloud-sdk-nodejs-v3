

export class ShowCertificatesHttpsInfoRequest {
    private 'page_size'?: number;
    private 'page_number'?: number;
    private 'domain_name'?: string;
    private 'user_domain_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withPageSize(pageSize: number): ShowCertificatesHttpsInfoRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ShowCertificatesHttpsInfoRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withDomainName(domainName: string): ShowCertificatesHttpsInfoRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserDomainId(userDomainId: string): ShowCertificatesHttpsInfoRequest {
        this['user_domain_id'] = userDomainId;
        return this;
    }
    public set userDomainId(userDomainId: string  | undefined) {
        this['user_domain_id'] = userDomainId;
    }
    public get userDomainId(): string | undefined {
        return this['user_domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCertificatesHttpsInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}