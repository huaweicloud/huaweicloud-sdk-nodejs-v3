import { OriginRequest } from './OriginRequest';


export class UpdateDomainOriginRequest {
    private 'domain_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: OriginRequest;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainOriginRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateDomainOriginRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: OriginRequest): UpdateDomainOriginRequest {
        this['body'] = body;
        return this;
    }
}