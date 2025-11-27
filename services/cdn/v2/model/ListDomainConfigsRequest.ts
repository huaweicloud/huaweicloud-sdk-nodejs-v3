

export class ListDomainConfigsRequest {
    private 'domain_names'?: string;
    public item?: string;
    private 'enterprise_project_id'?: string;
    public constructor(item?: string) { 
        this['item'] = item;
    }
    public withDomainNames(domainNames: string): ListDomainConfigsRequest {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: string  | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames(): string | undefined {
        return this['domain_names'];
    }
    public withItem(item: string): ListDomainConfigsRequest {
        this['item'] = item;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDomainConfigsRequest {
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