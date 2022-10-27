import { EnableAction } from './EnableAction';


export class EnableEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    public body?: EnableAction;
    public constructor(enterpriseProjectId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EnableEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: EnableAction): EnableEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}