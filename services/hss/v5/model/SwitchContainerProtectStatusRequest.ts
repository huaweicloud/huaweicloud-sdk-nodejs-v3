import { SwitchContainerHostsProtectStatusRequestInfo } from './SwitchContainerHostsProtectStatusRequestInfo';


export class SwitchContainerProtectStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchContainerHostsProtectStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchContainerProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchContainerHostsProtectStatusRequestInfo): SwitchContainerProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}