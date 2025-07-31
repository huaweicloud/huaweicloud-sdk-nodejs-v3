import { SwitchRaspRequestInfo } from './SwitchRaspRequestInfo';


export class SwitchRaspRequest {
    private 'enterprise_project_id'?: string;
    public body?: SwitchRaspRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchRaspRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SwitchRaspRequestInfo): SwitchRaspRequest {
        this['body'] = body;
        return this;
    }
}