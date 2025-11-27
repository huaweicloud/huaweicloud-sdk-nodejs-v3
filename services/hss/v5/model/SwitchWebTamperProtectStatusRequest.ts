import { SwitchWebTamperProtectStatusRequestBody } from './SwitchWebTamperProtectStatusRequestBody';


export class SwitchWebTamperProtectStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchWebTamperProtectStatusRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchWebTamperProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchWebTamperProtectStatusRequestBody): SwitchWebTamperProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}