import { CreateWebTamperProtectionConfigRequestBody } from './CreateWebTamperProtectionConfigRequestBody';


export class CreateWebTamperProtectionConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateWebTamperProtectionConfigRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWebTamperProtectionConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateWebTamperProtectionConfigRequestBody): CreateWebTamperProtectionConfigRequest {
        this['body'] = body;
        return this;
    }
}