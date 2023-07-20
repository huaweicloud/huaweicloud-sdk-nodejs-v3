import { RefererBody } from './RefererBody';


export class UpdateReferRequest {
    private 'enterprise_project_id'?: string;
    private 'domain_id'?: string;
    public body?: RefererBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateReferRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDomainId(domainId: string): UpdateReferRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: RefererBody): UpdateReferRequest {
        this['body'] = body;
        return this;
    }
}