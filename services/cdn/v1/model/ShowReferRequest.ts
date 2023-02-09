

export class ShowReferRequest {
    private 'enterprise_project_id'?: string | undefined;
    private 'domain_id': string | undefined;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowReferRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDomainId(domainId: string): ShowReferRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}