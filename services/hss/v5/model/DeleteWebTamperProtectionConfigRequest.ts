import { DeleteWebTamperProtectionConfigRequestInfo } from './DeleteWebTamperProtectionConfigRequestInfo';


export class DeleteWebTamperProtectionConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteWebTamperProtectionConfigRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteWebTamperProtectionConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteWebTamperProtectionConfigRequestInfo): DeleteWebTamperProtectionConfigRequest {
        this['body'] = body;
        return this;
    }
}