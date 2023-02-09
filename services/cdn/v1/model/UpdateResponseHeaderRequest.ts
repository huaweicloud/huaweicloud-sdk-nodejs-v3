import { HeaderBody } from './HeaderBody';


export class UpdateResponseHeaderRequest {
    private 'domain_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public body?: HeaderBody;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateResponseHeaderRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateResponseHeaderRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: HeaderBody): UpdateResponseHeaderRequest {
        this['body'] = body;
        return this;
    }
}