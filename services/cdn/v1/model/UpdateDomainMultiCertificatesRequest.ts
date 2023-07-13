import { UpdateDomainMultiCertificatesRequestBody } from './UpdateDomainMultiCertificatesRequestBody';


export class UpdateDomainMultiCertificatesRequest {
    private 'enterprise_project_id'?: string | undefined;
    public body?: UpdateDomainMultiCertificatesRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateDomainMultiCertificatesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateDomainMultiCertificatesRequestBody): UpdateDomainMultiCertificatesRequest {
        this['body'] = body;
        return this;
    }
}