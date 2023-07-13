

export class ShowDomainDetailByNameRequest {
    private 'domain_name': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(domainName?: any) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ShowDomainDetailByNameRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainDetailByNameRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}