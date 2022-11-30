

export class ListParseDomainDetailsRequest {
    private 'project_id': string | undefined;
    private 'domain_name': string | undefined;
    public constructor(projectId?: any, domainName?: any) { 
        this['project_id'] = projectId;
        this['domain_name'] = domainName;
    }
    public withProjectId(projectId: string): ListParseDomainDetailsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withDomainName(domainName: string): ListParseDomainDetailsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
}