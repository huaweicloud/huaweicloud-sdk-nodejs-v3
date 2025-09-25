import { SecurityCheckConfigRequestInfo } from './SecurityCheckConfigRequestInfo';


export class UpdateSecurityCheckConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: SecurityCheckConfigRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSecurityCheckConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SecurityCheckConfigRequestInfo): UpdateSecurityCheckConfigRequest {
        this['body'] = body;
        return this;
    }
}