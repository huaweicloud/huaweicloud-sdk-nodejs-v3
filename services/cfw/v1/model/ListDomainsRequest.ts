

export class ListDomainsRequest {
    private 'project_id'?: string;
    private 'domain_set_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'domain_name'?: string;
    private 'object_Id'?: string;
    public constructor(projectId?: string, domainSetId?: string, fwInstanceId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['domain_set_id'] = domainSetId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListDomainsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainSetId(domainSetId: string): ListDomainsRequest {
        this['domain_set_id'] = domainSetId;
        return this;
    }
    public set domainSetId(domainSetId: string  | undefined) {
        this['domain_set_id'] = domainSetId;
    }
    public get domainSetId(): string | undefined {
        return this['domain_set_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDomainsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListDomainsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListDomainsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDomainsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDomainName(domainName: string): ListDomainsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withObjectId(objectId: string): ListDomainsRequest {
        this['object_Id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_Id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_Id'];
    }
}