

export class DeployedResource {
    public id?: string;
    public type?: string;
    private 'domain_name'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): DeployedResource {
        this['id'] = id;
        return this;
    }
    public withType(type: string): DeployedResource {
        this['type'] = type;
        return this;
    }
    public withDomainName(domainName: string): DeployedResource {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeployedResource {
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