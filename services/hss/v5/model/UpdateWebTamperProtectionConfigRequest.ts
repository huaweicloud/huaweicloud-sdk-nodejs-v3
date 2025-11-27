import { UpdateWebTamperProtectionConfigRequestInfo } from './UpdateWebTamperProtectionConfigRequestInfo';


export class UpdateWebTamperProtectionConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateWebTamperProtectionConfigRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateWebTamperProtectionConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateWebTamperProtectionConfigRequestInfo): UpdateWebTamperProtectionConfigRequest {
        this['body'] = body;
        return this;
    }
}