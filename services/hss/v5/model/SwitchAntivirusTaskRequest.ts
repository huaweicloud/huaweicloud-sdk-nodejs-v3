import { SwitchAntivirusTaskRequestInfo } from './SwitchAntivirusTaskRequestInfo';


export class SwitchAntivirusTaskRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchAntivirusTaskRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchAntivirusTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchAntivirusTaskRequestInfo): SwitchAntivirusTaskRequest {
        this['body'] = body;
        return this;
    }
}