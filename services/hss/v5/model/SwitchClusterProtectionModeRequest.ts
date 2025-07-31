import { SwitchClusterProtectionModeRequestBody } from './SwitchClusterProtectionModeRequestBody';


export class SwitchClusterProtectionModeRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchClusterProtectionModeRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchClusterProtectionModeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchClusterProtectionModeRequestBody): SwitchClusterProtectionModeRequest {
        this['body'] = body;
        return this;
    }
}