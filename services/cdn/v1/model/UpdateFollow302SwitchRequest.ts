import { Follow302StatusRequest } from './Follow302StatusRequest';


export class UpdateFollow302SwitchRequest {
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    public body?: Follow302StatusRequest;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateFollow302SwitchRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateFollow302SwitchRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: Follow302StatusRequest): UpdateFollow302SwitchRequest {
        this['body'] = body;
        return this;
    }
}