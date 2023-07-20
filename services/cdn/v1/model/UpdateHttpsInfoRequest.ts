import { HttpInfoRequest } from './HttpInfoRequest';


export class UpdateHttpsInfoRequest {
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: HttpInfoRequest;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateHttpsInfoRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateHttpsInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: HttpInfoRequest): UpdateHttpsInfoRequest {
        this['body'] = body;
        return this;
    }
}