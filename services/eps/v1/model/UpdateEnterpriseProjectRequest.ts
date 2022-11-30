import { EnterpriseProject } from './EnterpriseProject';


export class UpdateEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    public body?: EnterpriseProject;
    public constructor(enterpriseProjectId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: EnterpriseProject): UpdateEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}