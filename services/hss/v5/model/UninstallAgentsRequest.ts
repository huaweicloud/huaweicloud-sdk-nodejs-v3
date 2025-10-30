import { UninstallAgentsRequestInfo } from './UninstallAgentsRequestInfo';


export class UninstallAgentsRequest {
    private 'enterprise_project_id'?: string;
    public body?: UninstallAgentsRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UninstallAgentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UninstallAgentsRequestInfo): UninstallAgentsRequest {
        this['body'] = body;
        return this;
    }
}