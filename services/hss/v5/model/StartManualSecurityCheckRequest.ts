import { StartManualSecurityCheckRequestInfo } from './StartManualSecurityCheckRequestInfo';


export class StartManualSecurityCheckRequest {
    private 'enterprise_project_id'?: string;
    public body?: StartManualSecurityCheckRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StartManualSecurityCheckRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: StartManualSecurityCheckRequestInfo): StartManualSecurityCheckRequest {
        this['body'] = body;
        return this;
    }
}